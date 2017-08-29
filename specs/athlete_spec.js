var assert = require("assert");
var Athlete = require("../athlete.js");
var WaterBottle = require("../water_bottle.js");


describe( "Athlete", function() {

  beforeEach(function(){
    boltBoy = new Athlete();
    waterBottle = new WaterBottle();
  })

  it("Athlete should have a hydration attribute that starts at 100.", function(){
    assert.strictEqual(boltBoy.hydration, 100);
  })

  it("Athlete should have a distance covered attribute starts at 0.", function(){
   assert.strictEqual(boltBoy.distance, 0);
  })

  it("Athlete should be able to run: increasing distance, decreasing hydration.", function(){
    boltBoy.run(10);
   assert.strictEqual(boltBoy.hydration, 90);
  })

  it("Athlete should not move when running dehydrated: hydration at 0.", function(){
    boltBoy.hydration = 0;
    boltBoy.run(10);
   assert.strictEqual(boltBoy.distance, 0);
  })

  it("Athlete should be able to increase hydration by drinking from water bottle", function(){
    waterBottle.fill();
    boltBoy.hydration = 90;
    boltBoy.drank(waterBottle);
   assert.strictEqual(boltBoy.hydration, 100);
  })


})