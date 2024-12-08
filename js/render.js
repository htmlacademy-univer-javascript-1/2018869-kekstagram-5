// Модуль для отрисовки миниатюр
import { openBigPicture } from './bigPicture.js'; // Импортируем функцию

const PictureRenderer = (() => {
  const createPictureElement = ({ url, description, likes, comments }) => {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');

    const img = document.createElement('img');
    img.src = url;
    img.alt = description;
    img.classList.add('picture__img');

    const likesElement = document.createElement('div');
    likesElement.classList.add('picture__likes');
    likesElement.textContent = likes;

    const commentsElement = document.createElement('div');
    commentsElement.classList.add('picture__comments');
    commentsElement.textContent = comments.length; // Используем длину массива комментариев

    // Добавляем обработчик клика для открытия полноразмерного изображения
    pictureElement.addEventListener('click', () => {
      openBigPicture({ url, description, likes, comments });
    });

    pictureElement.appendChild(img);
    pictureElement.appendChild(likesElement);
    pictureElement.appendChild(commentsElement);

    return pictureElement;
  };

  const renderPictures = (picturesData) => {
    const picturesContainer = document.querySelector('.pictures');
    const fragment = document.createDocumentFragment();

    picturesData.forEach((picture) => {
      const pictureElement = createPictureElement(picture);
      fragment.appendChild(pictureElement);
    });

    picturesContainer.appendChild(fragment);
  };

  return {
    renderPictures,
  };
})();

export { PictureRenderer };
