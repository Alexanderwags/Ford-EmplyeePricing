import React from 'react'
import Video from '../VideoPlayer'
import Modal from '../Modal/Modal.js' 
import img from   '../../../public/0.883386f5.jpg'
import Firma from '../firma/firma'
import './styles.scss'
const Aside = () => {
  
    return (
      <div className="info-video">
        <div className="video" style={{ backgroundImage: `url("${img}")` }}>
          <Modal>
            <Video />
          </Modal>
        </div>
        <div className="text-video">
          <h2>A Message From The General Manager</h2>
          <p>
            We decided to do something special this season, and we look forward
            to rewarding you for participating! It is a great time for an
            upgrade right now because many makes and models are in high demand
            and we are in need of more pre-owned inventory. This offer is a
            significant opportunity and we would be pleased if you took
            advantage of
          </p>
          <Firma />
          <p>John Doe, General Manager, Home Town</p>
        </div>
      </div>
    );
}



export default Aside
