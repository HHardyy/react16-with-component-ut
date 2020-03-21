import React from 'react'

const TotalPrice = ({ income, outcome }) => (
  <div>
    <h5>总收入：<span className="income">{income}</span></h5>
    ，
    <h5>总支出：<span className="outcome">{outcome}</span></h5>
  </div>
)

export default TotalPrice