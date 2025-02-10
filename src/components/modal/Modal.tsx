import './Modal.css';
import { createPortal } from "react-dom";
import React, {useEffect, useRef} from "react";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function Modal({ children, open }: ModalProps) {
  const dialog= useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialog.current) {
      return
    }

    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById('modal')!
  )
}
