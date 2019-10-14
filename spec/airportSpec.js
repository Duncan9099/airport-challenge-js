describe("airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
      airport = new Airport();
      plane = new Plane();
    });

  describe("land", function() {
    it("lands a plane at the airport", function() {
      expect(airport.land(plane)).toEqual(true);
    })
  })

  describe("takeOff", function() {

    it('the plane takes off', function(){
      airport.takeOff(plane)
      expect(plane.isFlying()).toBe(true)
    });

  });
})
