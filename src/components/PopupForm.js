import Popup from '@components/Popup.js';

export default class PopupForm extends Popup {
  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('form').addEventListener('submit', (evt) => {
      this._close();
    });
  }
}
