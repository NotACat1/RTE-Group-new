export default class Faq {
  constructor({ selHeader, selBtn, selText, classOpenBtn, classOpenText }, elemFaq) {
    this._elemHeader = elemFaq.querySelector(selHeader);
    this._elemBtn = elemFaq.querySelector(selBtn);
    this._elemText = elemFaq.querySelector(selText);
    this._classOpenBtn = classOpenBtn;
    this._classOpenText = classOpenText;
  }

  setEventListeners() {
    this._elemHeader.addEventListener('click', (evt) => {
      this._elemBtn.classList.toggle(this._classOpenBtn);
      this._elemText.classList.toggle(this._classOpenText);
    });
  }
}
