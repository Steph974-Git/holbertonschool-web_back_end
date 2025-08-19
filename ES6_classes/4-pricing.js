import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Number must be a string');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError("currency must be a Currency object");
    }

    this._amount = amount;
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Number must be a string');
    }
    this._amount = newAmount;
  }
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
