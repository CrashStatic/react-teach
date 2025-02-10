import Header from "./components/header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferentSection from "./components/DifferentSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import {useState} from "react";
import EffectSection from "./components/EffectSection";

export type TabContent = 'main' | 'feedback' | 'effect';

export default function App() {
  const [tab, setTab] = useState<TabContent>('effect');

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

        {tab === "effect" && (<EffectSection />)}
      </main>
    </>
  )
}

