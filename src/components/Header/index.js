import React from 'react'
import Logo from '../Logo'
import CLock from '../clock'
import EventExpire from '../EventExpire'
import  './styles.scss'
const Header = () => {

    return (
       <div className="header">
         <Logo />
         <EventExpire event="ford"/>
         <CLock />
       </div>
    )
}

export default Header