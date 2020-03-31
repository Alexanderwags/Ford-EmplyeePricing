import React from 'react'
import HomeLogo from '../homelogo'
import car  from './images/cars/base.png'
import './styles.scss'
const HeaderPage = () => {
    return (
      <div className="headerpage">
        <div className="container">
          <HomeLogo color="white" className="logo" />
          <img src={car} alt="car" />
        </div>
      </div>
    );
}
export default HeaderPage
