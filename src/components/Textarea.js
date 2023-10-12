export default class Textarea {
  constructor(elemTextarea) {
    this._textarea = elemTextarea;
  }

  setEventListeners() {
    this._textarea.addEventListener('input', (evt) => {
      evt.target.style.height = 'auto';
      evt.target.style.height = evt.target.scrollHeight + 'px';
    });
  }
}
