/* jshint esversion: 6 */

class ShoppingList {
  constructor(){
    this.items = [];
  }

  addItem(chips) {
    console.log(chips);
    if(chips instanceof ShoppingListItem !== true) {
      new Error("Invalid item");
    } else {
      console.log(this.chips + " has been added");
    }
  }
}

