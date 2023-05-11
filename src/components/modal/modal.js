const Modal = ({ isOpen, onClose, children, small, closebutton }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className={small ? 'modal-content-small' : "modal-content"}>
        {closebutton && <span className="modal-close" onClick={onClose}>&times;</span>}
        {children}
      </div>
    </div>
  );
}

export default Modal;
