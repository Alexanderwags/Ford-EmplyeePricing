import React from 'react'
import ford from './img/ford.png'
import styles from './styles.scss'
import cn from "classnames";

const homeLogo = ({color="blue"}) => {

     return (
       <div className={cn("logo", { color: color === "white" })}>
         <div className="img-ford">
           <div></div>
           <h4>Ford</h4>
           <div></div>
         </div>
         <div className="text-ford">
           <h1>Employee Pricing</h1>
         </div>
       </div>
     );

}
export default homeLogo