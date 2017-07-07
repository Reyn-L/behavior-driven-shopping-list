/* jshint esversion: 6 */

class ShoppingList {
  constructor(){
    this.items = [];
  }

  addItem(chips) {
    console.log(chips);
    if(!(chips instanceof ShoppingListItem)) {
      //similar to return, stops everything.
      throw new Error("Invalid item");
    } else {
      console.log(this.chips + " has been added");
    }
  }

  removeItem() {

  }
}

