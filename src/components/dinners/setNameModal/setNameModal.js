import Modal from "../../modal/modal";
import { useState } from "react";

export default function SetNameModal({setName}) {

  const [nameValue, setNameValue] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const done = () => {
    setIsOpen(false);
    setName(nameValue);
  }

  return (
    <Modal small isOpen={isOpen}>
      <h3>Welcome to FoodMeet!</h3>
      <p>What is your name?</p>
      <input type="text" value={nameValue} onInput={(e) => { setNameValue(e.target.value) }} />
      {nameValue.length > 0 && <button onClick={done}>Done</button>}
    </Modal>
  );

}