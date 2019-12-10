import shoppingList from './shopping-list.js.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
