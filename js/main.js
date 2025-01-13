import { renderPictures } from './render.js';
import { getData } from './api.js';
import './form-handler.js';
import './validation.js';
import './pictures.js';
import { turnFilterOn, filterPictures } from './sorting.js';

getData((posts) => {
  turnFilterOn(posts);
  renderPictures(filterPictures());
});
