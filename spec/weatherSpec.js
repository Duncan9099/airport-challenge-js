describe("weather", function() {
  var weather = new Weather

  describe("is_stormy?", function() {
    it("returns true", function() {
      spyOn(Math, 'random').and.returnValue(0.8)
      expect(weather.isStormy()).toEqual(true)
    })
  })
})
