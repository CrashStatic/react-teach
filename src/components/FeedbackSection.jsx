import Button from "./button/Button.jsx";
import {useRef, useState} from "react";




function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      setShow(true);
    }
  }

  return (
    <div>
      <h2>Input value: {show && input.current["value"]}</h2>
      <input
        ref={input}
        type="text"
        className='control'
        onKeyDown={handleKeyDown} />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help'
  })
  // const [name, setName] = useState('');
  // const [reason, setReason] = useState('help');
  // const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
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
            border: form.hasError ? '1px solid red' : null,
          }}
          onChange={handleNameChange} />

        <label htmlFor='reason'>Причина обращения</label>
        <select
          id='reason'
          className='control'
          value={form.reason}
          onChange={event => setForm({ ...prev, reason: event.target.value }) }>
          <option value='error'>Ошибка</option>
          <option value='help'>Нужна помощь</option>
          <option value='suggest'>Предложение</option>
        </select>

        {/*<pre>{JSON.stringify(form, null, 2)}</pre>*/}

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  )
}
