import { createLogger } from 'bunyan';
import fetch from 'node-fetch';
import redis from 'redis';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, tap } from 'rxjs/operators';

const host = 'localhost';
const port = 6379;
const pub = redis.createClient({ host, port });
const sub = redis.createClient({ host, port });
const getQuoteUrl = (symbol: string) => `https://api.iextrading.com/1.0/stock/${symbol}/quote`;
const requestQuote = (symbol: string) => fetch(getQuoteUrl(symbol)).then(x => x.json());
const log = createLogger({ name: 'PRICING-SERVER' });

function createPriceStream(symbol: string) {
  return Observable.interval(10000).pipe(
    mergeMap(() => Observable.fromPromise(requestQuote(symbol))),
    map(quote => ((quote.id = quote.symbol), quote)),
    map(quote => JSON.stringify(quote)),
  );
}

const subscriptions = new Map();
const SUBSCRIBE_TO_INDEX_UPDATES = 'SUBSCRIBE_TO_MARKET_UPDATES';

interface IHandlers {
  [channel: string]: (message: string) => void;
}

const createTopic = (symbol: string) => `MARKET_UPDATE.${symbol}`;

const handlers: IHandlers = {
  [SUBSCRIBE_TO_INDEX_UPDATES]: (message: string) => {
    const symbols: string[] = JSON.parse(message);

    symbols.filter(symbol => !subscriptions.has(symbol)).forEach((symbol: string) => {
      log.info('Subscribing to:', symbol);
      const subscription = createPriceStream(symbol).subscribe(price => pub.publish(createTopic(symbol), price));
      subscriptions.set(symbol, subscription);
    });
  },
};

sub.on('message', (channel: string, message: string) => {
  handlers[channel].call(null, message);
});

sub.subscribe('SUBSCRIBE_TO_MARKET_UPDATES');
