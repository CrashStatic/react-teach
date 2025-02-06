import logo from '/logo-name.svg';

export default function Header() {
  const now = new Date();
    return (
        <header>
            {/*<h1>My App</h1>*/}
          <img src={logo}  alt="logo" />
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
}
