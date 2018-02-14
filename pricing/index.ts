import redis from 'redis';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const pub = redis.createClient({host: 'localhost', port: 6379});
const sub = redis.createClient({host: 'localhost', port: 6379});

const randomPrice = () => (Math.random() * (max - min) + min).toFixed(2);

const max = 66;
const min = 62;

function createPriceStream(symbol: string) {
  return Observable.interval(3000).map(_ => JSON.stringify({
    change: randomPrice(),
    id: symbol,
    volume: randomPrice(),
  }));
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

    symbols.filter(symbol => !subscriptions.has(symbol))
      .forEach((symbol: string) => {
        const subscription = createPriceStream(symbol).subscribe((price) => pub.publish(createTopic(symbol), price));
        subscriptions.set(symbol, subscription);
      });
  }
};

sub.on('message', (channel: string, message: string) => {
  handlers[channel].call(null, message);
});


sub.subscribe('SUBSCRIBE_TO_MARKET_UPDATES');
