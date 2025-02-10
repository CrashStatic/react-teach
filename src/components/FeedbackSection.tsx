import Button from "./button/Button";
import React, {ChangeEvent, useRef, useState} from "react";

interface Form {
  name: string,
  hasError: boolean,
  reason: 'error' | 'help' | 'suggest'
}

function StateVsRef() {
  const input = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState<boolean>(false);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setShow(true);
    }
  }

  return (
    <div>
      <h2>Input value: {show && input.current?.value}</h2>
      <input
        ref={input}
        type="text"
        className='control'
        onKeyDown={handleKeyDown} />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState<Form>({
    name: '',
    hasError: false,
    reason: 'help'
  })

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  function handleReasonChange(event: ChangeEvent<HTMLSelectElement>) {
    setForm((prev) => ({
      ...prev,
      reason: event.target.value as 'error' | 'help' | 'suggest',
    }));
  }

  return (
    <section>
      <h2>Обратная связь</h2>
      <form style={{marginBottom: '1rem'}}>
        <label htmlFor='name'>Ваше имя</label>
        <input
          type='text'
          id='name'
          className='control'
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : undefined,
          }}
          onChange={handleNameChange} />

        <label htmlFor='reason'>Причина обращения</label>
        <select
          id='reason'
          className='control'
          value={form.reason}
          onChange={handleReasonChange}>
          <option value='error'>Ошибка</option>
          <option value='help'>Нужна помощь</option>
          <option value='suggest'>Предложение</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  )
}
