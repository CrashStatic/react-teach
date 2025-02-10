import {ways} from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
    return (
        <section>
            <h2>Наш подход к обучению</h2>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} {...way} />
                ))}
            </ul>
        </section>
    );
}
