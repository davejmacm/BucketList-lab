const ItemDisplayView = require('./item_display_view.js');

const ItemView = function(container) {
  this.container = container;
};

ItemView.prototype.render = function(item){
  console.log(item);
}

module.exports = ItemView;
