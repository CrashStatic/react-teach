import Button from "./button/Button.jsx";
import Modal from "./modal/Modal.jsx";
import {useState} from "react";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h2>Effects</h2>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h2>Hello from modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis porta tortor. Aenean mattis, erat
          at condiment tincidunt, eros augue facilisis quam, vel pharetra leo nibh sit amet nisl.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  )
}
