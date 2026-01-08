import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <section className='game container'>
      <div>
        <h1>Добро пожаловать!</h1>
        <p>Игра memory</p>
        <p>Правила игры</p>
        <ul>
          <li>Правило 1</li>
          <li>Правило 2</li>
          <li>Правило 3</li>
        </ul>
        <Link to='/game'>Начать игру</Link>
      </div>

    </section>
  );
}