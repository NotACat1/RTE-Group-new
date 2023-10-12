export default class Popup {
  constructor({ classOpen, selBtnClose }, elemPopup) {
    this._popup = elemPopup;
    this._classOpen = classOpen;
    this._elemBtnClose = elemPopup.querySelector(selBtnClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains(this._classOpen)) {
      this._close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt);
    });
    this._elemBtnClose.addEventListener('click', (evt) => {
      this._close();
    });
  }

  open() {
    this._popup.classList.add(this._classOpen);
    document.addEventListener('keydown', this._handleEscClose);
  }

  _close() {
    this._popup.classList.remove(this._classOpen);
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
