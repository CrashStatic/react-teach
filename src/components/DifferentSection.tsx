import Button from "./button/Button";
import { differences } from "../data";
import {useState} from "react";

type ContentType = 'way' | 'easy' | 'program' | null;

export default function DifferentSection() {
  let [contentType, setContentType] = useState<ContentType>(null);

  return (
    <section>
      <h2>Чем мы отличаемся от других</h2>
      <Button isActive={contentType === 'way'} onClick={() => setContentType('way')}>Подход</Button>
      <Button isActive={contentType === 'easy'} onClick={() => setContentType('easy')}>Доступность</Button>
      <Button isActive={contentType === 'program'} onClick={() => setContentType('program')}>Концентрация</Button>

      {!contentType && (<p>Нажми на кнопку</p>)}

      {contentType && (<p>{differences[contentType]}</p>)}
    </section>
  )
}
