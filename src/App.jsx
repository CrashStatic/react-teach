import Header from "./components/Header.jsx";
import {ways} from "./data.js";

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong> {props.description}
      </p>
    </li>
  )
}

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
      </main>
    </div>
  )
}

