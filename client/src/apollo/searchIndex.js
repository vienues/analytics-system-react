import * as R from 'ramda';
import Fuse from 'fuse.js';
import data from '@adaptive-insights/data';

let indexes = [];
let symbolIndex = [];

export const searchIndex = {
  create(corpus) {
    indexes = R.splitAt(1000, corpus).map(
      corpus =>
        new Fuse(corpus, {
          keys: [{ name: 'id', weight: 0.99 }, { name: 'name', weight: 0.1 }],

          threshold: 0.3,
          location: 0,
          distance: 8,
          maxPatternLength: 32,
          minMatchCharLength: 2,
          includeScore: true,

          // Sort by lexical score, market percentage, volume
          shouldSort: true,
          sortFn: (a, b) => {
            return (
              a.score -
              b.score -
              (a.item.marketPercent < b.item.marketPercent && b.score / 3) -
              (a.item.volume < b.item.volume && b.score / 3)
            );
          },
        }),
    );

    symbolIndex = new Fuse(corpus, {
      keys: ['id'],
      threshold: 0.1,
      location: 0,
      distance: 4,
      maxPatternLength: 6,
      minMatchCharLength: 0,
      includeScore: true,

      shortSort: true,
      sortFn: (a, b) => -(a.item.marketPercent > b.item.marketPercent) - (a.item.volume > b.item.volume),
    });
  },

  search(term) {
    let textMatches = [];
    let symbolMatches = [];

    for (let i = 0; textMatches.length <= i && i < indexes.length; i++) {
      textMatches = textMatches.concat(indexes[i].search(term));
    }

    if (term && term.length < 6) {
      symbolMatches = symbolIndex.search(term);
    }

    return R.compose(
      R.pluck('item'),
      R.sortBy(R.prop('score')),
      R.map(([a, b]) => (b ? { ...a, score: a.score + 1 } : a)),
      R.groupWith((a, b) => a.item.id === b.item.id),
    )([...textMatches, ...symbolMatches]);
  },
};

searchIndex.create(data.referenceSymbols.slice(0, 1000));

export default searchIndex;
