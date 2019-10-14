function Airport() {

};

Airport.prototype.land = function() {
  return true;
};

Airport.prototype.takeOff = function(plane) {
    return plane.isFlying;
};
