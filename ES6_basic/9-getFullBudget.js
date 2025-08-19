import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject (income, gdp, capita) {
  return {
    ...getBudgetObject(income, gdp, capita),
    getIncomeInDollars (amount) {
      return `$${amount}`;
    },
    getIncomeInEuros (amount) {
      return `${amount} euros`;
    }
  };
}
