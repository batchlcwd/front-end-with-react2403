import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
const CustomConfirmModal = ({
  isOpen,
  heading,
  confirmButtonText = "Yes",
  declineButtonText = "Decline",
  confirmButtonClicked,
  closeModal,
  showConfirmButton = true,
  showDeclineButton = true,
  children,
}) => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  return (
    <>
      <Modal
        className="max-h-screen"
        show={openModal}
        onClose={() => closeModal(false)}
      >
        <Modal.Header>{heading}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer className="flex justify-center gap-2">
          {showConfirmButton && (
            <Button
              color="green"
              onClick={() => {
                confirmButtonClicked();
                setOpenModal(false);
              }}
            >
              {confirmButtonText}
            </Button>
          )}
          {showDeclineButton && (
            <Button color="red" onClick={() => closeModal(false)}>
              {declineButtonText}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomConfirmModal;
