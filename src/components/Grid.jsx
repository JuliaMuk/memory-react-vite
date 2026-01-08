import React from "react";
import Card from "./Card";
import './Grid.css';

export default function Grid({images, finishedItems, checkItems}){
    const [visibleItems, setVisibleItems] = React.useState([]);

    const handleCardClick = (id) => {
      if (finishedItems.includes(id) || visibleItems.includes(id)) {
        return;
      }
      // Выделение карточек зависит от текущего состояния.
      switch (visibleItems.length) {
        case 0:
          // Если открытых карточек нет, создаем список из одной карточки.
          setVisibleItems([id]);
          break;
        case 1:
          // Если уже открыта одна карточка, добавляем вторую к списку.
          setVisibleItems((items) => [...items, id]);
          // Отправляем обе карточки на проверку.
          // Обновление visibleItems ещё не произошло и
          // вызов setVisibleItems только планирует обновление состояния,
          // поэтому мы явно указываем нужные идентификаторы.
          checkItems(visibleItems[0], id);
          // Включаем таймер для сброса видимых карточек.
          setTimeout(() => {
            setVisibleItems([]);
            // Величина задержки таймера задана в настройках,
            // если задержка будет велика, пользователь успеет выбрать другие карточки,
            // которые будут закрыты при срабатывании таймера.
            // Это ограничение нашей реализации, ради наглядности решения.
          }, 1000);
          break;
        default:
          // Выбор следующих карточек до срабатывания таймера,
          // сбрасываем список видимых.
          setVisibleItems([]);
      }
    };

    return (
      <ul className="cards">
        {images.map((item) => (
          <Card
            key={item.id}
            item={item}
            isVisible={visibleItems.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
            onCardClick={handleCardClick}
          />
        ))}
      </ul>
    );

}