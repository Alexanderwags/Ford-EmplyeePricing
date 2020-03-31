import React from 'react'
import Logo from '../Logo'
import CLock from '../clock'
import EventExpire from '../EventExpire'
import  './styles.scss'
const Header = () => {

    return (
       <div className="header">
         <Logo />
         <EventExpire event="Event Expires   March 28, 2020"/>
         <CLock />
       </div>
    )
}

export default Header
