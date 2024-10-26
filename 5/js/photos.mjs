import { getRandomInt } from './utils.mjs';
import { generateComments } from './comments.mjs';

// Функция для генерации массива фотографий
export const generatePhotos = (numPhotos) => {
  const photos = [];
  const uniqueIds = new Set();

  for (let i = 1; i <= numPhotos; i++) {
    let id;
    // Генерируем уникальный идентификатор для фотографии
    do {
      id = i; // В данном случае просто используем i, так как оно уникально
    } while (uniqueIds.has(id));
    uniqueIds.add(id);

    photos.push({
      id: id,
      url: `photos/${id}.jpg`,
      description: `Описание фотографии номер ${id}.`,
      likes: getRandomInt(15, 200),
      comments: generateComments(getRandomInt(0, 30)) // Случайное количество комментариев от 0 до 30
    });
  }

  return photos;
};
