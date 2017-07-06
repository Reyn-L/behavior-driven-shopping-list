var expect = chai.expect;
var should = chai.should();

var list;

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

  it('should create a li', function() {
    //invoke inside to check return
    expect(list.render()).to.be.instanceof(Element);
  });

  it('li element should have a class', function(){
    expect(list.render()).to.be.contain(Class);
  });
});

















