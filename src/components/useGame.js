import React from "react";

// Логику игры выносим из компонента.
export default function useGame(images) { //images - массив объектов все фотографий
    // Для вычисления текущего состояния игры сохраним список отгаданных карточек.
    const [finishedItems, setFinishedItems] = React.useState([]);
    //счетчик шагов игры - счетчик игры
    const [stepsCount, setStepsCount] = React.useState(0);

    // Функция сравнения двух карточек
    const checkItems = (firstItem, secondItem) => {
      // Чтобы сравнить карточки, нам нужно получить полные объекты данных.
      // Найдем объекты по их идентификаторам из параметров функции.
      const firstImage = images.find(({id}) => id === firstItem);
      const secondImage = images.find(({id}) => id === secondItem);
      // Сравним карточки по адресу изображения.
      if (firstImage.url === secondImage.url) {
        // Если изображения совпадают, обновляем список отгаданных карточек.
        // Для обновления списка создаем новый массив из копии текущего.
        // Добавляем оба идентификатора в новый массив.
        setFinishedItems((items) => [...items, firstItem, secondItem]);
      }
      setStepsCount((i) => i + 1);
    };

    // Функция сброса игры - очищение массива отгаданных карточек и счетчика игру
    const handleReset = () => {
      setFinishedItems([]);
      setStepsCount(0);
    };

    // Игра заканчивается, когда все карточки отгаданы,
    // чтобы понять, что все карточки отгаданы, сравниваем длину массива карточек и списка отгаданных.
    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

    // Логика игры скрыта в функции, а приложению мы сделаем доступным часть параметров.
    return {
      finishedItems,
      handleReset,
      stepsCount,
      checkItems,
      isWin
    };
  };


  