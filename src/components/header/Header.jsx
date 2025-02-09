import logo from '/logo-name.svg';
import {useState} from "react";
import { HeaderContainer} from "./styles.js";

export default function Header() {
  const [time, setTime] = useState(new Date());

  setInterval(() => setTime(new Date()), 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo"/>
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}
