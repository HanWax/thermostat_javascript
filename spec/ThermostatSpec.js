describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("set up", function(){
      it("should begin at 20 degrees", function() {
        expect(thermostat.temperature).toEqual(20);
      });

      it("should be in PSM as default", function(){
        expect(thermostat.powerSaveMode).toBe(true);
      })

      it("should be able to reset the temperature to 20", function(){
        thermostat.temperature = 30
        thermostat.reset()
        expect(thermostat.temperature).toEqual(20);
      })
  });

  describe('maximum temperature', function() {

    it('should be 25 degrees when PSM is on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

     it('should be 32 degrees when PSM is on', function(){
      thermostat.powerSaveMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);        
    })
  });


describe("with PSM on", function(){

    describe("increasing the temperature", function (){
      it ("can increase the temperature if less than 25 degrees", function() {
        thermostat.increaseTemperature()
        expect(thermostat.temperature).toEqual(21)
      })

      it("won't increase the temperature if over 25 degrees", function(){
        thermostat.temperature = 25
        thermostat.increaseTemperature()
        expect(thermostat.temperature).toEqual(25)
      })
    })

    describe("decrease the temperature", function(){
      it ("can decrease the temperature if current temperature is above 10 degrees", function () {
        thermostat.decreaseTemperature()
        expect(thermostat.temperature).toEqual(19)
      });

      it("should not be able to decrease below minimum temperature of 10 degrees", function() {
        thermostat.temperature = 10
        thermostat.decreaseTemperature()
        expect(thermostat.temperature).toEqual(10)
      });
    })
})

describe("with PSM off", function(){

  beforeEach(function() {
    thermostat.powerSaveMode = false;

  });

    describe("increasing the temperature", function (){
      it ("can increase the temperature if less than 32 degrees", function() {
        thermostat.temperature = 25
        thermostat.increaseTemperature()
        expect(thermostat.temperature).toEqual(26)
      })

      it("won't increase the temperature if over 32 degrees", function(){
        thermostat.temperature = 32
        thermostat.increaseTemperature()
        expect(thermostat.temperature).toEqual(32)
      })
    })

    describe("decrease the temperature", function(){
      it ("can decrease the temperature if current temperature is above 10 degrees", function () {
        thermostat.decreaseTemperature()
        expect(thermostat.temperature).toEqual(19)
      });

      it("should not be able to decrease below minimum temperature of 10 degrees", function() {
        thermostat.temperature = 10
        thermostat.decreaseTemperature()
        expect(thermostat.temperature).toEqual(10)
      });
    })
  })

describe("energy usage level", function() {
    it("is efficient if temperature is less than 18", function(){
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual('efficient');
    })

    it("is average if temperature is greater than 18 but less than 25", function(){
      thermostat.temperature = 24
      expect(thermostat.energyUsage()).toEqual('average');
    })

    it("is inefficient if temperature is greater than 25", function(){
      thermostat.temperature = 26
      expect(thermostat.energyUsage()).toEqual('inefficient');
    })
  });


});
  
