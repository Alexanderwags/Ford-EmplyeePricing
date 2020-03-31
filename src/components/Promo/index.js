import React from 'react'
import './styles.scss'

const Promo = ({text,value}) => {

    return (
        <div className="promo">
            <h4>{text}</h4>
            <h2>${value}</h2>
        </div>
    )

}
export default Promo