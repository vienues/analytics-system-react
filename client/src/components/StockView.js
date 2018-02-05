import React from 'react'
import StockSummary from './StockSummary'
import StockHistory from './StockHistory'
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import NewsFeed from './NewsFeed';
import './stock-view.css'
import PriceOverview from './PriceOverview';

class StockView extends React.Component {

  render() {
    const {data: {loading, error}} = this.props;

    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error!</p>;
    }

    const {name, id, historicalPrices, relatedNews, latestPrice} = this.props.data.stockInfo;

    return (
      <section className='stock-view'>
        <div className='row'>
          <div className='col-md-3'>
            <PriceOverview name={name} id={id}/>
            <StockSummary stockInfo={filter(StockSummary.fragments.stockInfo, this.props.data.stockInfo)}/>
          </div>
          <StockHistory className='col-md-5' prices={historicalPrices}/>
          <NewsFeed className='col-md-4' items={relatedNews}/>
        </div>
      </section>
    );
  }
}

const STOCK_QUERY = gql`
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
`;

const graph = graphql(STOCK_QUERY)

export default compose(
  graph
)(StockView)