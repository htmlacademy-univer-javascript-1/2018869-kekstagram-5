import { showAlert, successMessage, isEscapeKey } from './utils.js';
import { sendData } from './api.js';
import { pristine } from './validation.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('#upload-file');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCloseButton = form.querySelector('#upload-cancel');
const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');

const closeUploadOverlay = () => {
  form.reset();
  pristine.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', isEscapeKey);
};

const isTextFieldFocused = () =>
  document.activeElement === form.querySelector('.text__hashtags') ||
  document.activeElement === form.querySelector('.text__description');

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const openUploadOverlay = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

uploadFile.addEventListener('change', openUploadOverlay);
uploadCloseButton.addEventListener('click', closeUploadOverlay);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onSendDataSuccess = () => {
  closeUploadOverlay();
  successMessage();
};

const onSendDataError = () => {
  showAlert('Не удалось загрузить фотографию');
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(onSendDataSuccess, onSendDataError, new FormData(form));
    unblockSubmitButton();
  } else {
    showAlert('Пожалуйста, исправьте ошибки в форме перед отправкой.');
  }
};

form.addEventListener('submit', onFormSubmit);
