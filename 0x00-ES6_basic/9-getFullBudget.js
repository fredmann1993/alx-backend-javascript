import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(...items) {
  const budget = getBudgetObject(...items);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
