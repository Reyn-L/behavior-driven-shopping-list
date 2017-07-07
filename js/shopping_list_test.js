var expect = chai.expect;
var should = chai.should();

var list;
var shop;

describe("ShoppingListItem Class", function() {

  before(function(){
    list = new ShoppingListItem("Jody", "Black");
  });

  it('should be a class', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('it should have a property name', function() {
    expect(list).to.have.property("name");
  });

  it('should have a property named description', function() {
    expect(list).to.have.property("description");
  });

  it('should have a property named is_done', function() {
    expect(list).to.have.property("is_done");
  });

  it('should have a constructor "name"', function() {
    expect(list.name).to.equal("Jody");
  });

  it('should have a constructor named "description"', function() {
    expect(list.description).to.equal("Black");
  });

  it('should have a method named check', function(){
    expect(list.check).to.be.a('function');
  });

  it('check method should set is_done to be true', function() {
    list.check();
    expect(list.is_done).to.equal(true);
  });

  it('should have a method named uncheck', function(){
    expect(list.uncheck).to.be.a('function');
  });

  it('uncheck method should set is_done to be false', function(){
    //invoke outside because not checking return
    list.uncheck();
    expect(list.is_done).to.equal(false);
  });

  it('should have a method named render', function(){
    expect(list.render).to.be.a('function');
  });

  it('should create li element', function() {
    //invoke inside to check return
    expect(list.render()).to.be.instanceof(Element);
  });

  it('element li should have a property of className',function() {
    expect(list.render()).to.have.property('className');
  });

  it('className should equal to completed_[is_done]', function() {
    expect(list.render().className).to.equal("completed_" + list.is_done);
  });

  it('should append two span tags to li element', function(){
    expect(list.render().childElementCount).to.equal(2);
  });

  it('should have a name within the 1st span tag', function() {
    var a = list.render();
    var span = a.querySelectorAll("span")[0];
    console.log(span);
    expect(span.innerText).to.equal(list.name);
  });

  it('should have a description within the 2nd span tag', function() {
    var lst = list.render();
    var spanTwo = lst.querySelectorAll('span')[1];
    expect(spanTwo.innerText).to.equal(list.description);
  });
});


describe("ShoppingList Class", function() {

  before(function(){
    shop = new ShoppingList();
  });

  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
  });




});




/*it('should throw a forced error', function(){
  expect(jeese.throwErr.bind(jeese)).to.throw();
});*/





/* it('should throw when wrapped in anonymouse function', function() {
  expect(function() ( jeese.throwErr();)).to.throw();
}) */










