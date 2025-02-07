import Header from "./components/Header.jsx";
import { ways, differences } from "./data.js";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/button/Button.jsx";
import { useState } from "react";

export default function App() {
  let [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header/>

      <main>
        <section>
          <h2>Наш подход к обучению</h2>
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description}/>
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h2>Чем мы отличаемся от других</h2>
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

          {!contentType && (<p>Нажми на кнопку</p>)}

          {contentType && (<p>{differences[contentType]}</p>)}
        </section>
      </main>
    </div>
  )
}

