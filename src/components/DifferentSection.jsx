import Button from "./button/Button.jsx";
import { differences } from "../data.js";
import {useState} from "react";

export default function DifferentSection() {
  let [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h2>Чем мы отличаемся от других</h2>
      <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
      <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
      <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

      {!contentType && (<p>Нажми на кнопку</p>)}

      {contentType && (<p>{differences[contentType]}</p>)}
    </section>
  )
}
