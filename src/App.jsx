import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferentSection from "./components/DifferentSection.jsx";

export default function App() {

  return (
    <div>
      <Header/>

      <main>
        <TeachingSection />
        <DifferentSection />
      </main>
    </div>
  )
}

