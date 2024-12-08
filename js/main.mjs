// eslint-disable-next-line no-unused-vars
import {generateComments} from './comments.mjs';
import {generatePhotos} from './photos.mjs';
import { renderPictures } from './PictureRenderer.js';

const numPhotos = 25; // Количество фотографий, которое нужно сгенерировать
const photos = generatePhotos(numPhotos); // Генерируем массив фотографий

// Вызов функции для отображения миниатюр
renderPictures(photos);
