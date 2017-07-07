/* jshint esversion: 6 */



class ShoppingList {
  constructor(){
    this.items = [];

  }

  addItem(item) {
    if(!(item instanceof ShoppingListItem)) {
      //similar to return, stops everything.
      throw new Error("Invalid item");
    } else {
      this.items.push(item);
      
    }
  }

  removeItem(stuff) {


  }
}


