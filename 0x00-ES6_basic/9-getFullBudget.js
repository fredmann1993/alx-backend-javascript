import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(...items) {
  const budget = getBudgetObject(...items);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
