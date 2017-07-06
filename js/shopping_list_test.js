var expect = chai.expect;
var should = chai.should();

describe("ShoppingListItem Class", function() {

  beforeEach(function(){
    list = new ShoppingListItem("bob");
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
    expect(list).to.equal(newShoppingListItem.name);
  });

  it('should have a constructor named "description"', function() {
    expect(list).to.equal(newShoppingListItem.description);
  });

  it('should have a method named "check"', function() {
    expect(list.check()).to.equal("check");
  });

  it('method named check should set is_done to true', function() {
    expect(list.check()).to.equal(true);
  });

it('should have a method named "uncheck"', function() {
    expect(list.uncheck()).to.equal("uncheck");
  });

  it('method named uncheck should set is_done to false', function() {
    expect(list.uncheck()).to.equal(false);
  });


});