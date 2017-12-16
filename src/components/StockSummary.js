import React from 'react'
import gql from 'graphql-tag'

const StockSummary = ({stockInfo}) => {
  const {
    name,
    previousClose,
    daysRange,
    fiftyTwoWeekRange,
    avgVolume,
    marketCap,
    beta,
    peRatio,
    eps,
    earningsDate
  } = stockInfo;

  return (
    <section>
      <p>{name}</p>
      <table className='pt-table pt-striped'>
        <tbody>
        <tr>
          <td>Previous close</td>
          <td>{previousClose}</td>
        </tr>
        <tr>
          <td>Days Range</td>
          <td>{daysRange}</td>
        </tr>
        <tr>
          <td>52 week Range</td>
          <td>{fiftyTwoWeekRange}</td>
        </tr>
        <tr>
          <td>Average volume</td>
          <td>{avgVolume}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td>{marketCap}</td>
        </tr>
        <tr>
          <td>Beta</td>
          <td>{beta}</td>
        </tr>
        <tr>
          <td>PE Ratio</td>
          <td>{peRatio}</td>
        </tr>
        <tr>
          <td>EPS</td>
          <td>{eps}</td>
        </tr>
        <tr>
          <td>Earnings Date</td>
          <td>{earningsDate}</td>
        </tr>
        </tbody>
      </table>
    </section>

  );
};

StockSummary.fragments = {
  stockInfo: gql`
      fragment StockSummary on Stock {
          name
          previousClose
          daysRange
          fiftyTwoWeekRange
          avgVolume
          marketCap
          beta
          peRatio
          eps
          earningsDate
      }
  `
}

export default StockSummary;