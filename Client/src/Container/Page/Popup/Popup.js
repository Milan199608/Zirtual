import React,{useState} from 'react';
import  Modal  from '../../../Component/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



const  Popup=()=> {

    const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );

    </>
  );
}

export default Popup;