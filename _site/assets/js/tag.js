function filter(tag) {
  setActiveTag(tag);
}

function setActiveTag(tag) {

  // loop through all items and remove active class
  var items = document.getElementsByClassName('publi-container');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'publi-container hidden');
  }

  // set the selected tag's item to active
  console.log(tag + '-item');
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'publi-container active');
  }
}
