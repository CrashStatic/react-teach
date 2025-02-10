import Button from "./button/Button";
import {TabContent} from "../App";

interface TabButtonProps {
    active: TabContent;
    onChange: (tab: TabContent) => void;
}

export default function TabsSection({ active, onChange}: TabButtonProps) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
    </section>
  )
}
