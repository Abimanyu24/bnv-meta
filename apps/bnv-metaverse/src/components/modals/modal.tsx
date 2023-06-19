import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
interface modalParam {
  showModal: boolean;
  modalTitle: string;
  modalContent: string;
}
function SuccessModal({
  showModal = false,
  modalTitle,
  modalContent,
}: modalParam) {
  const [show, setShow] = useState(showModal);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
