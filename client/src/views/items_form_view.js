PubSub = require('../helpers/pub_sub.js');

const ItemsFormView = function(container) {
  this.container = container;
};

ItemsFormView.prototype.bindEvents = function() {
  this.container.addEventListener('submit', (evt)=>{
    this.handleSubmit(evt);
  });
};

ItemsFormView.prototype.handleSubmit = function (evt) {
  //prevent default
  const newItem = this.createItem(evt.target);
  PubSub.publish('ItemFormView:submitted-form', newItem);
  evt.target.reset();
};

ItemsFormView.prototype.createItem = function(form) {
  const newItem = {
    goal: form.item.value,
    difficulty: form.difficulty.value
  };


return newItem;
};
module.exports= ItemsFormView;
