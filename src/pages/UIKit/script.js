import './style.scss';

import {
  optionsFaq,
  optionsForm,
  optionsPopup,
  optionsPopupSuccess,
  optionsTextarea,
  optionsTelephone,
} from '@utils/constants.js';
import Faq from '@components/Faq.js';
import PopupSuccess from '@components/PopupSuccess.js';
import Form from '@components/Form.js';
import Textarea from '@components/Textarea.js';
import Telephone from '@components/Telephone.js';

const popupSuccess = new PopupSuccess(
  optionsPopup,
  optionsPopupSuccess,
  document.querySelector(optionsPopupSuccess.selPopupSuccess),
);
popupSuccess.setEventListeners();

[...document.querySelectorAll(optionsFaq.selFaq)].forEach((item) => {
  const newFaq = new Faq(optionsFaq, item);
  newFaq.setEventListeners();
});

[...document.querySelectorAll(optionsForm.selForm)].forEach((item) => {
  const newForm = new Form(optionsForm, item, popupSuccess.open.bind(popupSuccess));
  newForm.setEventListeners();
});

[...document.querySelectorAll(optionsTextarea.selTextarea)].forEach((item) => {
  const newTextarea = new Textarea(item);
  newTextarea.setEventListeners();
});

[...document.querySelectorAll(optionsTelephone.selTelephone)].forEach((item) => {
  const newTelephone = new Telephone(item);
  newTelephone.formatting();
});
