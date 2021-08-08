import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import "./modal.css";
import gif from "../Asset/giphy.gif";

const Modal = (props) => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal__card">
        <div className="meme">
          <img className="gif" src={gif} alt="gif" />
        </div>
        <div className="title">
          <div className="text">പറ്റിച്ചേ 😂🤣</div>
          <div className="para">
            ഞ്ഞിങ്ങളുടെ ഡാറ്റാ ഞനങ്ങളുടെ കഴ്കളിൽ സുരക്ഷിതമാണ്
          </div>
          <Button onClick={props.onClose} variant="outlined" color="primary">
            Thank you🙏
          </Button>
        </div>
      </div>
    </Fragment>
  );
};
export default Modal;
