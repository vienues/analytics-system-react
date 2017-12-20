import React from 'react'
import gql from 'graphql-tag'
import './stock-summary.css'

const StockSummary = ({stockInfo, className}) => {
  const {
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
    <section className={className}>
      <table className='summary-table'>
        <tr>
          <td>Previous close</td>
          <td className='right-align'>{previousClose}</td>
        </tr>
        <tr>
          <td>Days Range</td>
          <td className='right-align'>{daysRange}</td>
        </tr>
        <tr>
          <td>52 week Range</td>
          <td className='right-align'>{fiftyTwoWeekRange}</td>
        </tr>
        <tr>
          <td>Average volume</td>
          <td className='right-align'>{avgVolume}</td>
        </tr>
        <tr>
          <td>Market Cap</td>
          <td className='right-align'>{marketCap}</td>
        </tr>
        <tr>
          <td>Beta</td>
          <td className='right-align'>{beta}</td>
        </tr>
        <tr>
          <td>PE Ratio</td>
          <td className='right-align'>{peRatio}</td>
        </tr>
        <tr>
          <td>EPS</td>
          <td className='right-align'>{eps}</td>
        </tr>
        <tr>
          <td>Earnings Date</td>
          <td className='right-align'>{earningsDate}</td>
        </tr>
      </table>
    </section>

  );
};

StockSummary.fragments = {
  stockInfo: gql`
      fragment StockSummary on Stock {
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