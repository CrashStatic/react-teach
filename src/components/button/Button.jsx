import './Button.css';

export default function Button({ children, onClick, isActive }) {
  return <button className={isActive ? 'button button--active' : 'button'} onClick={onClick}>{children}</button>
}
