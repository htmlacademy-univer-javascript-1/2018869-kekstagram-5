// Функция для генерации случайного числа в заданном диапазоне
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
