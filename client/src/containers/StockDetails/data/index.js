import rawStockFeed from './stockFeed.json';
import { DateTime } from 'luxon';

const stockFeed = rawStockFeed.map(datapoint => {
  const datetime = DateTime.fromSQL(`${datapoint.date} ${datapoint.minute}`).toISO();

  return {
    ...datapoint,
    datetime,
    // date: new Date(datapoint.date)
  };
});

export const STOCK = {
  name: 'The Stock Name',
  symbol: 'TSN',
  company: {
    summary:
      'The Stock Name enim commodo amet irure pariatur incididunt anim sit aute minim. Id nulla nostrud irure velit ex do nisi ipsum.',
    numberOfEmployees: 50,
    sharedOutstanding: '10.5M',
    sector: 'Robotics',
    industry: 'Honey Bees',
  },
  market: {
    name: 'DVORAK Fun Times',
    closed: true,
    previousCloseDate: new DateTime.local().toFormat('M/d hh:mm a'),
  },
  summary: {
    price: '12.50',
    change: 1.25,
    changePercent: '1.04%',
    volume: '3,460,685',
    averageDailyVolume: '3,111,951',
    previousClose: '11.85',
    ['52WeekRange']: ['11.31', '13.75'],
    marketCap: '79.384B',
    beta: '0.538',
    earningsPerShare: '-2.40',
    earningsPerShareDate: '03/31/2017',
    dividend: '1.168',
    yield: '3.761%',
    exdividendDate: '11/22/2017',
    priceToEarningsRatio: '197.25',
  },
  analytics: {
    history: {
      // meta/aggregation data
      // …

      // The raw feed
      data: stockFeed,
    },
  },
  peers: [
    {
      symbol: 'EX',
    },
    {
      symbol: 'AMP',
    },
    {
      symbol: 'LE',
    },
  ],
  relatedNews: [
    {
      title: 'Amet ullamco ex amet culpa Lorem ad adipisicing cupidatat pariatur laborum aliqua.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
    {
      title: 'Sunt elit esse est reprehenderit exercitation do incididunt enim officia elit sint nisi ea.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
    {
      title: 'Ullamco aute velit duis tempor dolore consectetur ullamco irure eu esse aute culpa.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
    {
      title: 'Proident elit minim quis laborum fugiat fugiat occaecat in.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
    {
      title: 'Ad laborum aliquip ad ullamco eiusmod elit excepteur commodo dolor adipisicing ea exercitation.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
    {
      title:
        'Cillum aliquip dolor labore dolore consectetur irure amet in labore eiusmod deserunt do ipsum officia amet.',
      summary:
        'Culpa duis ut labore minim anim laborum sint eiusmod fugiat velit ut enim reprehenderit. Cillum Lorem esse velit velit cupidatat sunt ad excepteur laborum enim laboris minim irure culpa eu. Commodo fugiat anim exercitation sit nisi id ad magna ut fugiat minim sint ex. Adipisicing voluptate magna culpa non id dolore voluptate labore id ut fugiat nostrud. Ex qui nisi sint exercitation incididunt elit ex est proident.',
      stocks: [
        {
          symbol: 'EX',
        },
        {
          symbol: 'AMP',
        },
        {
          symbol: 'LE',
        },
      ],
    },
  ],
};

export default STOCK;
