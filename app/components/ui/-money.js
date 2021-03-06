import Ember from 'ember';
const { computed, inject } = Ember;

let UiMoneyComponent = Ember.Component.extend({
  tagName:       'span',
  classNames:    'component-ui-money is-semi-bold',
  amountMoney:   null,
  displayBase:   'cad', // This is the widget base, could be different than the actual amount base
  separator:     '.',
  showCode:      true,
  exchangeRate:  null,
  rate:          computed.alias('exchangeRate'),
  displayAmount: computed('amountMoney', 'amountMoney.amount', 'displayBase', 'exchangeRate', function () {
    // Get with default only works with undefined
//     const amountBase   = this.getWithDefault('amount.base', 'cad'); Get with default works with null only
//     const displayBase  = this.getWithDefault('displayBase', 'cad');
    let exchangeRatesService = this.get('exchangeRatesService');
    const amount             = this.get('amountMoney');
    if (!amount) {
      return '- ERROR -';
    }
    const amountBase   = this.get('amountMoney.base') || 'cad';
    const displayBase  = this.get('displayBase') || 'cad';
    const exchangeRate = this.get('exchangeRate') || exchangeRatesService.get('latest');

    let { locale, code } = exchangeRatesService.lookup(displayBase);
    let convertedAmount  = exchangeRatesService.convertCurrency(amountBase, displayBase, amount.get('amount'), exchangeRate);

    let formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: code });
    return formatter.format(convertedAmount);
  }),
});

UiMoneyComponent.reopenClass({
  positionalParams: [ 'amountMoney', 'displayBase' ],
});

export default UiMoneyComponent;
