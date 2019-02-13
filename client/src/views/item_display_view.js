PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ItemDisplayView = function (container) {
  this.container = container;
};

ItemDisplayView.prototype.bindEvents = function() {
  PubSub.subscribe('Items:data-ready', (evt)=> {
    this.render(evt.detail);

  });
};

ItemDisplayView.prototype.render = function (items) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);

  items.forEach((item)=>{
    itemView.render(item)
  });
};

module.exports = ItemDisplayView;
