import Header from "./components/Header.jsx";
import { ways } from "./data.js";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/button/Button.jsx";

export default function App() {
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
          <Button>Подход</Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
        </section>
      </main>
    </div>
  )
}

