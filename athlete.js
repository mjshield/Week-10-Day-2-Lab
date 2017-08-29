var Athlete = function() {
  this.hydration = 100;
  this.distance = 0;
  this.run = function(distance) {
    if ( (this.hydration - distance)  >= 0){
      this.hydration -= distance;
    }
  }
  this.drank = function(drank) {
    var hydrationDifference = 100 - this.hydration;
    if (drank.volume > hydrationDifference){
      this.hydration += hydrationDifference;
      drank.volume -= hydrationDifference;
    } else{ 
      this.hydration += drank.volume;
      drank.volume = 0;
    }
    
  }
}

module.exports = Athlete;