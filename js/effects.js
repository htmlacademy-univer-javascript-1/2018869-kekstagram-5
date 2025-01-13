import '../vendor/nouislider/nouislider.js';

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 0,
    step: 1,
    unit: ' ',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ' ',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ' ',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ' ',
  },
];

const form = document.querySelector('.img-upload__form');
const scaleInput = form.querySelector('.scale__control--value');
const smallerButton = form.querySelector('.scale__control--smaller');
const biggerButton = form.querySelector('.scale__control--bigger');
const image = form.querySelector('.img-upload__preview img');
const slider = form.querySelector('.effect-level__slider');
const effectLevelContainer = form.querySelector('.img-upload__effect-level');

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

slider.classList.add('hidden');
effectLevelContainer.classList.add('hidden');

const updateSlider = (effect) => {
  slider.classList.remove('hidden');
  effectLevelContainer.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    step: effect.step,
    start: effect.max,
  });

  if (isDefault()) {
    slider.classList.add('hidden');
    effectLevelContainer.classList.add('hidden');
  }
};


const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider(currentEffect);
  slider.noUiSlider.set(currentEffect.max);
  image.style.filter = `${currentEffect.style}(${currentEffect.max}${currentEffect.unit})`;
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  const effectValue = slider.noUiSlider.get();
  image.classList.add(`effects__preview--${currentEffect.name}`);
  image.style.filter = `${currentEffect.style}(${effectValue}${currentEffect.unit})`;
};

slider.noUiSlider.on('update', onSliderUpdate);
form.addEventListener('change', onFormChange);

// Масштаб
const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue >= MIN_SCALE) {
    scaleImage(newValue);
  }
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue <= DEFAULT_SCALE) {
    scaleImage(newValue);
  }
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const resetScale = () => {
  scaleImage(DEFAULT_SCALE);
};

export {resetScale};
