const ItemDisplayView = require('./views/item_display-view.js');
const Items = require('./models/items.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, wooo!");

  const itemsContainer = document.querySelector('#items');
  const itemDisplayView = new ItemDisplayView(itemsContainer);
  itemsDisplayView.bindEvents();

  const url = "http://localhost:3000/api/items";
  const items = new Items(url);
  items.getData();
})
