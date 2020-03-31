import React , { useState } from "react";
import Modall from "react-awesome-modal";
import Video from "../VideoPlayer"
import Play from './Play.js'
import './styles.scss'
const Modal = ({children}) => {
 
  const [Visible, setVisible] = useState(false);

  function openModal() {
    setVisible(true)
  }

  function closeModal () {
    setVisible(false)
  }

    return (
      <section className="modal">
 
          <button className="play" onClick={() => openModal()}>
            <Play style={{width:"60px"}}/>
          </button>
 
        <Modall
          visible={Visible}
          width="600"
          height="300"
          effect="fadeInUp"
          onClickAway={() => closeModal()}
        >
          <div>{children}</div>
        </Modall>
      </section>
    );
  
}

export default Modal