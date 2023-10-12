import Popup from '@components/Popup.js';

export default class PopupSuccess extends Popup {
  constructor(optionPopup, { selTitle, selSubtitle }, elemPopup) {
    super(optionPopup, elemPopup);
    this._elemTitle = elemPopup.querySelector(selTitle);
    this._elemSubtitle = elemPopup.querySelector(selSubtitle);
  }

  open(title, subtitle) {
    super.open();
    this._elemTitle.textContent = title;
    this._elemSubtitle.textContent = subtitle;
  }

  close() {
    super.close();
    this._elemTitle.textContent = '';
    this._elemSubtitle.textContent = '';
  }
}
