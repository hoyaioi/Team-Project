import React from "react";
import '../CSS/Modal.css';
import AdminMemberUpdate from "./AdminMemberUpdate";

function ModalItemWrite(props) {
  console.log(props)
  function closeModal() {
    props.closeModal();
  }

 

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
        <AdminMemberUpdate item={props.item} />
      </div>
    </div>
  );
}

export default ModalItemWrite;