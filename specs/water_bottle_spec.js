var assert = require("assert");
var WaterBottle = require("../water_bottle.js");

describe( "Water Bottle", function() {

  it( "should be empty at start", function() {
    var bottle = new WaterBottle();
    // console.log("bottle", bottle);
    assert.strictEqual( bottle.volume, 0 )
  } )

  it("should go to 100 when filled", function(){
    var bottle = new WaterBottle();
    bottle.fill();
    assert.strictEqual(bottle.volume, 100)
  })

  it("should go down by 10 when drank", function(){
    var bottle = new WaterBottle();
    bottle.fill();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90)
  })

  it("should go to 0 when emptied", function(){
    var bottle = new WaterBottle();
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0)
  })
  
  it("should not be able to go below 0", function(){
    var bottle = new WaterBottle();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0)
  })


} )