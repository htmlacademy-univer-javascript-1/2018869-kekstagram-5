import {generateComments} from './comments.mjs';
import {generatePhotos} from './photos.mjs';

const comments = generateComments(30);
// eslint-disable-next-line no-console
console.log(comments);

const photos = generatePhotos(25);
// eslint-disable-next-line no-console
console.log(photos);
