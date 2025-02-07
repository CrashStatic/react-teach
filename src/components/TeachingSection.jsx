import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
  return (
    <section>
      <h2>Наш подход к обучению</h2>
      <ul>
        {ways.map(way => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  )
}
