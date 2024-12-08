// bigPicture.mjs

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImage = bigPictureElement.querySelector('img');
const bigPictureCaption = bigPictureElement.querySelector('.caption');
const closeButton = bigPictureElement.querySelector('.close-button');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsContainer = bigPictureElement.querySelector('.comments');
const loadMoreButton = bigPictureElement.querySelector('.comments-loader');

let currentCommentIndex = 0; // Индекс текущего комментария для загрузки
const commentsPerPage = 5; // Количество комментариев на страницу

// Функция для отображения комментариев
const displayComments = (comments) => {
  const commentsToShow = comments.slice(currentCommentIndex, currentCommentIndex + commentsPerPage);
  commentsToShow.forEach((comment) => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <img src="${comment.avatar}" alt="${comment.name}" class="avatar">
      <p><strong>${comment.name}:</strong> ${comment.message}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });

  currentCommentIndex += commentsToShow.length; // Обновляем индекс текущего комментария

  // Обновляем счетчик комментариев
  commentCountElement.textContent = `${currentCommentIndex} из ${comments.length} комментариев`;

  // Если все комментарии загружены, скрываем кнопку
  if (currentCommentIndex >= comments.length) {
    loadMoreButton.classList.add('hidden');
  } else {
    loadMoreButton.classList.remove('hidden');
  }
};

// Функция для открытия полноразмерного изображения
export const openBigPicture = (photo) => {
  bigPictureElement.classList.remove('hidden');
  bigPictureImage.src = photo.url;
  bigPictureCaption.textContent = photo.description;

  // Сброс текущего индекса комментариев
  currentCommentIndex = 0;
  commentsContainer.innerHTML = ''; // Очищаем контейнер комментариев
  displayComments(photo.comments); // Отображаем первые комментарии

  // Обработчик для кнопки "Загрузить ещё"
  loadMoreButton.onclick = () => displayComments(photo.comments);
};

// Функция для закрытия полноразмерного изображения
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
};

// Обработчик события для кнопки закрытия
closeButton.addEventListener('click', closeBigPicture);

// Закрытие по клику вне изображения
bigPictureElement.addEventListener('click', (evt) => {
  if (evt.target === bigPictureElement) {
    closeBigPicture();
  }
});
