import img1 from "./img/cats-1.jpg"
import img2 from "./img/cats-2.jpg"
import img3 from "./img/cats-3.jpg"
import img4 from "./img/cats-4.jpg"
import img5 from "./img/cats-5.jpg"
import img6 from "./img/cats-6.jpg"

const images = [{
  'id': 'YdAqiUkUoWA',
  'url': img1,
}, {
  'id': 'hX_hf2lPpUU',
  'url': img2,
}, {
  'id': 'w1JE5duY62M',
  'url': img3,
}, {
  'id': '3tYZjGSBwbk',
  'url': img4,
}, {
  'id': 'NoXUQ54pDac',
  'url': img5,
}, {
  'id': 'OZhYgZh0bAg',
  'url': img6,
}, {
  'id': 'YdAqiUkUoWA1',
  'url': img1,
}, {
  'id': 'hX_hf2lPpUU1',
  'url': img2,
}, {
  'id': 'w1JE5duY62M1',
  'url': img3,
}, {
  'id': '3tYZjGSBwbk1',
  'url': img4,
}, {
  'id': 'NoXUQ54pDac1',
  'url': img5,
}, {
  'id': 'OZhYgZh0bAg1',
  'url': img6,
}];

images.sort(() => Math.random() - 0.5)



export {images}