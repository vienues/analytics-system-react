import React from 'react'
import './price-overview.css'

const PriceOverview = ({name, id, className, price}) => (
  <div className={`${className} price-overview`}>
    <h3 className="instrument-name">{`${name} (${id})`}</h3>
    <h2>{price}</h2>
    <p>As of 11:52 GMT. Market open</p>
  </div>
)

export default PriceOverview