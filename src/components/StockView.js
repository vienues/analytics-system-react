import React from 'react'
import StockSummary from './StockSummary'
import StockHistory from './StockHistory'
import { compose } from 'recompose';
import { displayLoadingState } from '../util/compose';
import { graphql } from 'react-apollo/index';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import NewsFeed from './NewsFeed';
import './stock-view.css'
import PriceOverview from './PriceOverview';

const StockView = ({data}) => {
  const {name, id, historicalPrices, relatedNews} = data.stockInfo;
  return (
    <section className='stock-view'>
      <div className='row'>
        <div className='col-md-3'>
          <PriceOverview name={name} id={id}/>
          <StockSummary stockInfo={filter(StockSummary.fragments.stockInfo, data.stockInfo)}/>
        </div>
        <StockHistory className='col-md-5' prices={historicalPrices}/>
        <NewsFeed className='col-md-4' items={relatedNews}/>
      </div>
    </section>
  );
};

const graph = graphql(gql`
    query ChosenStock {
        stockInfo {
            id
            name
            historicalPrices {
                date
                close
            }
            ...NewsFeed,
            ...StockSummary,
        }
    }
    ${NewsFeed.fragments.news},
    ${StockSummary.fragments.stockInfo}
`)

export default compose(
  graph,
  displayLoadingState
)(StockView)