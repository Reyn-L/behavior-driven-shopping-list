/* jshint esversion: 6*/
class ShoppingListItem {
  constructor(name, description) {
  	this.name = name;
  	this.description = description;
  	this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    let li = document.createElement('li');
    li.className = "completed_[is_done]";
    
    let span = document.createElement('span');
    return li;
  }




}
