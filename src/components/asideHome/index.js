import React from 'react'
import SearchHome from 'components/searchHome/searchHome'
import './styles.scss'
const asideHome = ({voucher="voucher",money="X,XXXX!"}) => {
    
    return (
      <>
        <div className="info-aside">
          <h1>Our Ford Employee Pricing Event is Back !</h1>
          <h3>
            Trade up into a new vehicle and receive a <a>{voucher}</a> valued at
            up to ${money}
          </h3>
        </div>
        <SearchHome /> 
      </>
    )
}
export default asideHome