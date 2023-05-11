export default function SmallModal({ isOpen, onClose, children }) {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content-small">
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );

}