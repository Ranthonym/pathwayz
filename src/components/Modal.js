import React from "react";
import propTypes from "prop-types";

const Modal = ({ modal: { state, praise, points } }) => {
  return (
    <div className={"correct-modal" + (state === "show" ? " modal-enter" : "")}>
      <div className="praise">{praise}</div>
      <div className="points">{points}</div>
    </div>
  );
};

Modal.propTypes = {
  modal: propTypes.shape({
    state: propTypes.string.isRequired,
    praise: propTypes.string.isRequired,
    points: propTypes.string.isRequired,
  }),
};

export default Modal;
