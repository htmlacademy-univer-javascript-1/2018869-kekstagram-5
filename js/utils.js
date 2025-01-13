const ALERT_SHOW_TIME = 5000;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const successMessage = document.querySelector('.success');
    const errorMessage = document.querySelector('.error');
    if (successMessage) {
      successMessage.remove();
    }
    if (errorMessage) {
      errorMessage.remove();
    }
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const showSuccessMessage = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(successTemplate);
  document.body.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showErrorMessage = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(errorTemplate);
  document.body.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown);
};

const onSuccessButtonCLick = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onErrorButtonCLick = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onDocumentKeydown);
};

successButton.addEventListener('click', onSuccessButtonCLick);
errorButton.addEventListener('click', onErrorButtonCLick);

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscapeKey,
  showAlert,
  showSuccessMessage,
  showErrorMessage,
  debounce };
