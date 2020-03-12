import React,{useState} from 'react';
import Modal from "react-modal"
import './App.css';

const customStyles = {
  overlay:{
    color:"grey"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function openModal(){
    setModalIsOpen(true);
  }
 function closeModal() {
   setModalIsOpen(false)
 }
  return (
    <div className="App">
    <button onClick={openModal}>Open modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={false} style={customStyles}>
        <h2>Modal Title</h2>
        <p>Modal body</p>
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
