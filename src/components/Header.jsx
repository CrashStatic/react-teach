import logo from '/logo-name.svg';
import {useState} from "react";

export default function Header() {
  const [time, setTime] = useState(new Date());

  setInterval(() => setTime(new Date()), 1000);

  return (
    <header>
      {/*<h1>My App</h1>*/}
      <img src={logo} alt="logo"/>
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </header>
  )
}
