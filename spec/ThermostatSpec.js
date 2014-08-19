

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();

  });

    it("should begin at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it ("can increase the temperature", function() {
      thermostat.increaseTemperature()
      expect(thermostat.temperature).toEqual(21)
    })

    it ("can decrease the temperature", function () {
      thermostat.decreaseTemperature()
      expect(thermostat.temperature).toEqual(19)
    });
 });
  
