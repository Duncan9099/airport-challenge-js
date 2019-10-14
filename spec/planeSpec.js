describe('plane', function() {
  var plane = new Plane

  describe('isFlying', function() {
    it('returns true when flying', function() {
      expect(plane.isFlying()).toBe(true)
    });
  });
});
