import React from 'react'
import './price-overview.css'
import gql from 'graphql-tag';
import { graphql } from "react-apollo/index";
import { compose } from 'recompose';

const PriceOverview = (props) => {

  const {data: {loading, error}} = props;

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error!</p>;
  }

  return <div className={`${props.className} price-overview`}>
    <h3 className="instrument-name">{`${props.name} (${props.id})`}</h3>
    <h2>{props.data.latestPrice.open}</h2>
    <p>As of 11:52 GMT. Market open</p>
  </div>
}

const SUBSCRIPTION = gql`
    subscription {
        latestPrice(id: "123"){
            open
        }
    }
`;


export default compose(
  graphql(SUBSCRIPTION)
)(PriceOverview)