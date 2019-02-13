PubSub = require('../helpers/pub_sub.js');

const ItemDisplayView = function (container) {
  this.container = container;
};

ItemDisplayView.prototype.bindEvents = function {
  PubSub.subscribe("Items:data-ready", (evt)=> {
    this.render(evt.detail)
  });
};


//do render function
