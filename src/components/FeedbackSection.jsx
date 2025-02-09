import Button from "./button/Button.jsx";
import {useState} from "react";

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
      <form>
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

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>
    </section>
  )
}
