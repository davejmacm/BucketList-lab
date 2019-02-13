const ItemDisplayView = require('./views/item_display_view.js');
const ItemsFormView = require('./views/items_form_view.js');
const Items = require('./models/items.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, wooo!");

  const itemsContainer = document.querySelector('#items');
  const itemDisplayView = new ItemDisplayView(itemsContainer);
  itemDisplayView.bindEvents();

  const formContainer = document.querySelector('.items');
  const itemsFormView = new ItemsFormView(formContainer);
  itemsFormView.bindEvents();

  const url = "http://localhost:3000/api/items";
  const items = new Items(url);
  items.getData();
  items.bindEvents();
})
