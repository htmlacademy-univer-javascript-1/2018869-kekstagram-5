const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const onUploadImageChange = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
      effectsPreview.forEach((preview) => {
        preview.style.backgroundImage = `url(${reader.result})`;
      });
    });
    reader.readAsDataURL(file);
  }
};

fileChooser.addEventListener('change', onUploadImageChange);
