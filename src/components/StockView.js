import React from 'react'
import StockSummary from './StockSummary'
import StockHistory from './StockHistory'
import { compose } from 'recompose';
import { displayLoadingState } from './compose';
import { graphql } from 'react-apollo/index';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import styled from 'styled-components'
import NewsFeed from "./NewsFeed";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`

const StockView = ({data}) => {
  return (
    <Section>
      <StockSummary stockInfo={filter(StockSummary.fragments.stockInfo, data.stockInfo)}/>
      <StockHistory prices={data.stockInfo.historicalPrices}/>
      <NewsFeed items={data.stockInfo.relatedNews}/>
    </Section>
  );
};

const graph = graphql(gql`
    query ChosenStock {
        stockInfo {
            relatedNews {
                title
                description
                publishedAt
                author
            },
            historicalPrices {
                date
                close
            }
            ...StockSummary,
        }
    }
    ${StockSummary.fragments.stockInfo}
`)

export default compose(
  graph,
  displayLoadingState
)(StockView)