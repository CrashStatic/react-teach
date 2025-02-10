import logo from '/logo-name.svg';
import {useEffect, useState} from "react";
import { HeaderContainer} from "./styles.js";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval =  setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo"/>
      <span>Время сейчас: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}
