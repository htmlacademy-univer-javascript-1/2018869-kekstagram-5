import Pristine from '/vendor/pristine/pristine.min.js';

const formElement = document.getElementById('upload-form');
const closeButton = document.getElementById('close-form');
const imageUploadInput = document.querySelector('.img-upload__input');

const pristine = new Pristine(formElement, {
  classTo: 'form-group',
  errorClass: 'is-invalid',
  successClass: 'is-valid',
  errorTextParent: 'form-group',
  errorTextClass: 'invalid-feedback',
});

// Валидация хэш-тегов
const validateHashtags = (value) => {
  const hashtags = value.split(' ').filter(Boolean); // Разделяем по пробелам и убираем пустые
  if (hashtags.length > 5) return false; // Не более 5 хэш-тегов
  return hashtags.every(tag => /^#[A-Za-zА-Яа-я0-9]{1,19}$/.test(tag)); // Проверяем каждый тег
};

// Добавляем валидацию для полей
pristine.addValidator(
  document.getElementById('hashtags'),
  validateHashtags,
  'Хэш-теги должны начинаться с # и содержать до 20 символов, максимум 5 тегов.'
);

// Обработчик отправки формы
formElement.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  if (pristine.validate()) {
    // Если форма валидна, можно отправить данные
    formElement.submit();
  }
});

// Обработчик закрытия формы
closeButton.addEventListener('click', () => {
  formElement.reset(); // Сбрасываем значения полей формы
  pristine.reset(); // Сбрасываем валидацию
  imageUploadInput.value = ''; // Сбрасываем выбранное изображение
});

// Прекращаем распространение события нажатия клавиш Esc, если фокус на поле ввода
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', (event) => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
      }
    }, { once: true });
  });
});
