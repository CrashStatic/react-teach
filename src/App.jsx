import Header from "./components/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferentSection from "./components/DifferentSection.jsx";
import IntroSection from "./components/IntroSection.jsx";

export default function App() {

  return (
    <>
      <Header/>
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferentSection />
      </main>
    </>
  )
}

