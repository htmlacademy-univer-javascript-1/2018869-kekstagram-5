import noUiSlider from '/vendor/nouislider/nouislider.min.js';

export function initializeImageEditor(imageSelector, sliderSelector, inputSelector, filterSelector) {
  const scaleSlider = document.querySelector(sliderSelector);
  const scaleValueInput = document.querySelector(inputSelector);
  const editableImage = document.querySelector(imageSelector);
  const filterSelect = document.querySelector(filterSelector);

  // Настройка слайдера
  noUiSlider.create(scaleSlider, {
    start: [1], // Начальное значение масштаба
    connect: [true, false],
    range: {
      'min': [0.5],
      'max': [2]
    },
    step: 0.1 // Шаг изменения
  });

  // Обновление масштаба изображения и значения в скрытом поле
  scaleSlider.noUiSlider.on('update', (values) => {
    const scaleValue = values[0];
    editableImage.style.transform = `scale(${scaleValue})`; // Применяем масштаб к изображению
    scaleValueInput.value = scaleValue; // Записываем значение в скрытое поле
  });

  // Сбрасываем значение слайдера при переключении фильтра
  filterSelect.addEventListener('change', () => {
    scaleSlider.noUiSlider.set([1]); // Сброс значения слайдера
    editableImage.style.transform = 'scale(1)'; // Сбрасываем масштаб изображения
    scaleValueInput.value = 1; // Обновляем скрытое поле
  });
}
