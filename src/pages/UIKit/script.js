import './style.scss';

import {
  optionsFaq,
  optionsForm,
  optionsPopup,
  optionsPopupSuccess,
  optionsTextarea,
  optionsTelephone,
  optionsHeader,
  selPopups,
} from '@utils/constants.js';
import Faq from '@components/Faq.js';
import PopupForm from '@components/PopupForm.js';
import PopupSuccess from '@components/PopupSuccess.js';
import Form from '@components/Form.js';
import Textarea from '@components/Textarea.js';
import Telephone from '@components/Telephone.js';
import Header from '@components/Header.js';

const popupSuccess = new PopupSuccess(
  optionsPopup,
  optionsPopupSuccess,
  document.querySelector(optionsPopupSuccess.selPopupSuccess),
);
popupSuccess.setEventListeners();

const popupFormOrder = new PopupForm(optionsPopup, document.querySelector(selPopups.popupFormOrder));
popupFormOrder.setEventListeners();
const header = new Header(
  optionsHeader,
  document.querySelector(optionsHeader.selHeader),
  popupFormOrder.open.bind(popupFormOrder),
);
header.setEventListeners();

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
