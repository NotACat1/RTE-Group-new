import './style.scss';

import { selectorsFaq } from '@utils/constants.js';
import Faq from '@components/Faq.js';

[...document.querySelectorAll(selectorsFaq.selFaq)].forEach((item) => {
  const newFaq = new Faq(selectorsFaq, item);
  newFaq.setEventListeners();
});
