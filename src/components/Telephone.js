export default class Telephone {
  constructor(elemTelephone) {
    this._telephone = elemTelephone;
  }

  formatting() {
    this._telephone.addEventListener('input', (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');
      let rezValue = '';
      if (inputValue.length >= 0) {
        rezValue = '+7 ' + inputValue.substring(1, 4);
      }
      if (inputValue.length > 4) {
        rezValue = rezValue + ' ' + inputValue.substring(4, 7);
      }
      if (inputValue.length > 7) {
        rezValue = rezValue + '-' + inputValue.substring(7, 9);
      }
      if (inputValue.length > 9) {
        rezValue = rezValue + '-' + inputValue.substring(9, 11);
      }
      event.target.value = rezValue;
    });
  }
}
