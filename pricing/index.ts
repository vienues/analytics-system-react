import redis from 'redis';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';
import { map, mergeMap, scan } from 'rxjs/operators';

import { Decimal } from 'decimal.js';
import fetch from 'node-fetch';
import { Observable } from 'rxjs/Observable';

const pub = redis.createClient({ host: 'localhost', port: 6379 });
const sub = redis.createClient({ host: 'localhost', port: 6379 });

const getQuoteUrl = (symbol: string) => `https://api.iextrading.com/1.0/stock/${symbol}/quote`;
const requestQuote = (symbol: string) => fetch(getQuoteUrl(symbol)).then(x => x.json());

const changeNumber = (num: number, postive: boolean) => {
  const parsed = new Decimal(num);
  const dp = parsed.decimalPlaces();
  const altered = postive ? parsed.mul(new Decimal(1.1)) : parsed.dividedBy(new Decimal(1.1));
  return altered.toDecimalPlaces(dp);
};

function createPriceStream(symbol: string) {
  const source$ = Observable.fromPromise(requestQuote(symbol));

  return source$.pipe(
    mergeMap(quote =>
      Observable.interval(3000).pipe(
        scan((acc: boolean, next: number) => !acc, true),
        scan(
          (acc: any, next) => ({
            ...acc,
            change: changeNumber(acc.change, next),
            changePercent: changeNumber(acc.changePercent, next),
            id: symbol,
            latestPrice: changeNumber(acc.latestPrice, next),
          }),
          quote,
        ),
      ),
    ),
    map(x => JSON.stringify(x)),
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
      const subscription = createPriceStream(symbol).subscribe(price => pub.publish(createTopic(symbol), price));
      subscriptions.set(symbol, subscription);
    });
  },
};

sub.on('message', (channel: string, message: string) => {
  handlers[channel].call(null, message);
});

sub.subscribe('SUBSCRIBE_TO_MARKET_UPDATES');
