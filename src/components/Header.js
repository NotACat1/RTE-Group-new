export default class Header {
  constructor({ selContainer, classOpenContainer, selBtn, selHamburger, classOpenHamburger }, elemHeader, openPopup) {
    this._elemContainer = elemHeader.querySelector(selContainer);
    this._classOpenContainer = classOpenContainer;
    this._elemBtns = [...elemHeader.querySelectorAll(selBtn)];
    this._elemHamburger = elemHeader.querySelector(selHamburger);
    this._classOpenHamburger = classOpenHamburger;
    this._openPopup = openPopup;
  }

  setEventListeners() {
    this._elemBtns.forEach((itemBtn) => {
      itemBtn.addEventListener('click', (evt) => {
        this._openPopup();
      });
    });
    this._elemHamburger.addEventListener('click', (evt) => {
      evt.target.classList.toggle(this._classOpenHamburger);
      this._elemContainer.classList.toggle(this._classOpenContainer);
    });
  }
}
