import React from 'react'
import StockSummary from './StockSummary'
import StockHistory from './StockHistory'
import { compose } from 'recompose';
import { graphql } from 'react-apollo/index';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import NewsFeed from './NewsFeed';
import './stock-view.css'
import PriceOverview from './PriceOverview';

class StockView extends React.Component {

  componentWillMount() {
    this.props.data.subscribeToMore({
        document: SUBSCRIPTION,
        updateQuery: (prev, {subscriptionData}) => {
          if (!subscriptionData.data) {
            return prev;
          }
          const stockInfo = {...prev.stockInfo, latestPrice: subscriptionData.data.latestPrice}
          return Object.assign({}, prev, {stockInfo})
        }
      }
    );
  }

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
            <PriceOverview name={name} id={id} price={latestPrice.open}/>
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
            latestPrice {
                open
            }
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

const SUBSCRIPTION = gql`
    subscription {
        latestPrice(id: "123"){
            open
        }
    }
`;

const graph = graphql(STOCK_QUERY)

export default compose(
  graph
)(StockView)