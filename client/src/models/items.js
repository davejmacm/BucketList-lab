const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Items = function (url) {
  this.url = url;
  this.request = new Request(this.url);
};

Items.prototype.getData = function () {
  this.request.get()
  .then((items) =>{
    PubSub.publish('Items:data-ready', items);
  })
  .catch(console.error);
};

Items.prototype.bindEvents = function() {
  PubSub.subscribe('ItemFormView:submitted-form', (evt) =>{
    console.log(evt.detail);
    this.postItem(evt.detail);
  });
};

Items.prototype.postItem = function(detail) {

  this.request.post(detail)
  .then((details) => {
    console.log(details);
    PubSub.publish('Items:data-ready', details);
  })
  .catch(console.error);
};


module.exports = Items;
