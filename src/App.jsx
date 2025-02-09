import Header from "./components/header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferentSection from "./components/DifferentSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";

export default function App() {
  const [tab, setTab] = useState('feedback');

  return (
    <>
      <Header/>
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferentSection />
          </>
        )}

        {tab === "feedback" && (<FeedbackSection />)}
      </main>
    </>
  )
}

