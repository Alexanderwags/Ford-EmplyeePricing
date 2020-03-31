import React from 'react'
import HeaderPage from '../../components/HeaderPage'
import Aside from 'components/Aside'
import ContactIn from 'components/ContactInfo'
import PromoHome from '../../components/PromoHome'
import './styles.scss'
const Step1 = () => {
    return (
      <div className="step1">
        <HeaderPage />
        <div className="body container">
          <div className="asidee">
            <Aside />
          </div>
          <div className="contacto">
            <ContactIn />
          </div>
        </div>
        <PromoHome/>
      </div>
    )
}

export default Step1