import {getRandomInt} from './utils.mjs';

// Массив с возможными комментариями
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Массив с возможными именами авторов комментариев
const names = [
  'Артём',
  'Ольга',
  'Сергей',
  'Елена',
  'Дмитрий',
  'Анна'
];

// Функция для генерации комментариев
export const generateComments = (numComments) => {
  const comments = [];
  const uniqueIds = new Set();

  for (let i = 0; i < numComments; i++) {
    let id;
    // Генерируем уникальный идентификатор для комментария
    do {
      id = getRandomInt(1, 1000); // Ограничиваем диапазон для идентификаторов комментариев
    } while (uniqueIds.has(id));
    uniqueIds.add(id);

    comments.push({
      id: id,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: messages[getRandomInt(0, messages.length - 1)],
      name: names[getRandomInt(0, names.length - 1)]
    });
  }

  return comments;
};
