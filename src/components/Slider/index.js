import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Img from './info-img.json'
import a from 'components/Slider/images/slides/base/0.png'
import prueba from './theme/base'
import './styles.scss'
const Slider = ({slider}) => {
  var data =Img
  
  const params = {
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
    
  return(
    <Swiper {...params} >
    { data.map( 
        imagen => {
          
         return( 
           
          <div className={`slider${slider}`} 
                key={imagen.id} 
                style={{backgroundImage: `url("${imagen.img}")`}}>
                       


          </div> 
         
         
          )


        }
      
    )
      }
    </Swiper>
  )
}
 
export default Slider;