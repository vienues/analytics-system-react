import React from 'react'
import './price-overview.css'

const PriceOverview = ({name, id, className}) => (
  <div className={`${className} price-overview`}>
    <h3 className="instrument-name">{`${name} (${id})`}</h3>
    <h2>66.59 <span className='negative'>-0.56 (-0.83%)</span></h2>
    <p>As of 11:52 GMT. Market open</p>
  </div>
)

export default PriceOverview