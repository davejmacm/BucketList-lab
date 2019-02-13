const ItemDisplayView = require('./item_display_view.js');

const ItemView = function(container) {
  this.container = container;
};

ItemView.prototype.render = function(item){
  const itemContainer = document.createElement('div');
  itemContainer.classList = 'item div';

  const goal = this.createItem(item.goal);
  itemContainer.appendChild(goal);

  const difficulty = this.createDifficulty(item.difficulty);
  itemContainer.appendChild(difficulty);

  this.container.appendChild(itemContainer);
}

ItemView.prototype.createItem = function (goal){
  const item = document.createElement('p');
  item.textContent = `goal:${goal}`;
  return item;
};

ItemView.prototype.createDifficulty = function (difficulty){
  const detail = document.createElement('p');
  detail.textContent = `difficulty: ${difficulty}/10`;
  return detail;
};

module.exports = ItemView;
