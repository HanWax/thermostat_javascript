function Thermostat() {
	this.temperature = 20;
	this.powerSaveMode = true;

}

Thermostat.prototype.increaseTemperature = function() {
	if (this.temperature < this.maximumTemperature()) this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
	if (this.temperature > 10) this.temperature -= 1;
};

Thermostat.prototype.maximumTemperature = function() {
	return (this.powerSaveMode) ? 25 : 32;
}

