export default class Form {
  constructor(
    {
      selInput,
      classInputErr,
      classLabelErr,
      classTextErr,
      selCheckbox,
      classCheckboxErr,
      selBtnSub,
      classBtnSubOn,
      classBtnSubOff,
    },
    elemForm,
    openPopupSuccess,
  ) {
    // form
    this._form = elemForm;
    // inputs
    this._elemInputs = [...elemForm.querySelectorAll(selInput)].filter((item) => item.hasAttribute('required'));
    this._classInputErr = classInputErr;
    // label
    this._classLabelErr = classLabelErr;
    // text error
    this._classTextErr = classTextErr;
    // checkboxs
    this._elemCheckboxs = [...elemForm.querySelectorAll(selCheckbox)].filter((item) => item.hasAttribute('required'));
    this._classCheckboxErr = classCheckboxErr;
    // btn submit
    this._elemBtnSub = elemForm.querySelector(selBtnSub);
    this._classBtnSubOn = classBtnSubOn;
    this._classBtnSubOff = classBtnSubOff;
    // openPopupSuccess
    this._openPopupSuccess = openPopupSuccess;

    this._inputList = this._elemInputs.concat(this._elemCheckboxs);
  }

  _hasInvalidInput() {
    return this._inputList.some((elemInput) => {
      return !elemInput.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._elemBtnSub.disabled = true;
      this._elemBtnSub.classList.remove(this._classBtnSubOn);
      this._elemBtnSub.classList.add(this._classBtnSubOff);
    } else {
      this._elemBtnSub.disabled = false;
      this._elemBtnSub.classList.add(this._classBtnSubOn);
      this._elemBtnSub.classList.remove(this._classBtnSubOff);
    }
  }

  _showInputError(elemInput, mesErr) {
    const elemErr = this._form.querySelector(`span#${elemInput.id}-error`);
    const labelErr = this._form.querySelector(`label.input__label[for="${elemInput.id}"]`);
    elemInput.classList.add(this._classInputErr);
    elemErr.classList.add(this._classTextErr);
    elemErr.textContent = mesErr;
    labelErr.classList.add(this._classLabelErr);
  }

  _hideInputError(elemInput) {
    const elemErr = this._form.querySelector(`span#${elemInput.id}-error`);
    const labelErr = this._form.querySelector(`label.input__label[for="${elemInput.id}"]`);
    elemInput.classList.remove(this._classInputErr);
    elemErr.classList.remove(this._classTextErr);
    elemErr.textContent = '';
    labelErr.classList.remove(this._classLabelErr);
  }

  _isValid(elemInput) {
    if (elemInput.validity.valueMissing) {
      this._showInputError(elemInput, elemInput.dataset.mesErr);
      return;
    }
    if (!elemInput.validity.valid) {
      this._showInputError(elemInput, elemInput.validationMessage);
      return;
    }
    this._hideInputError(elemInput);
  }

  _isValidCheckbox(elemCheckbox) {
    if (!elemCheckbox.validity.valid) {
      elemCheckbox.classList.remove(this._classCheckboxErr);
    } else {
      elemCheckbox.classList.add(this._classCheckboxErr);
    }
  }

  _reset() {
    this._form.target.reset();
    this._elemCheckboxs.forEach((itemCheckbox) => {
      itemCheckbox.classList.remove(this._classCheckboxErr);
    });
  }

  setEventListeners() {
    this._toggleButtonState();
    this._elemInputs.forEach((itemInput) => {
      itemInput.addEventListener('input', (evt) => {
        this._isValid(evt.target);
        this._toggleButtonState();
      });
    });
    this._elemCheckboxs.forEach((itemCheckbox) => {
      itemCheckbox.addEventListener('input', (evt) => {
        this._isValidCheckbox(evt.target);
        this._toggleButtonState();
      });
    });
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._reset();
      this._openPopupSuccess(this._form.dataset.popupTitle, this._form.dataset.popupSubtitle);
    });
  }
}
