function ElectrApp(name, power) {
    this.equipment = 'electrical appliance';
    this.name = name,
    this.power = power,
    this.state = false
}

ElectrApp.prototype.turnOn = function(answer) {
    if (answer === "on") {
      this.state = true;
    } else if ( confirm(`Turn on the ${this.name}?`) ) {
      this.state = true;
    }
}

function Compucter(name, CPU, RAM, power) {
    this.name = name,
    this.cpu = CPU,
    this.ram = RAM,
    this.power = power
};
Compucter.prototype = new ElectrApp();

function Pump(name, pressure, depth, power) {
    this.name = name,
    this.pressure = pressure,
    this.depth = depth,
    this.power = power
}
Pump.prototype = new ElectrApp();


const laptop = new Compucter('laptop MSI', 'i5-12100', '16gb', 65);
const desktopPC = new Compucter('PC', 'i7-12900', '32gb', 800);
const deskLamp = new ElectrApp('desk lamp', 60);
const submersiblePump = new Pump('submersible pump', '3bar', '30m', 1500);
const circulationPump = new Pump('circulation pump', '1.5bar', '', 750);
const pumpingStation = new Pump('pumping station', '3bar', '8m', 1000);

laptop.turnOn('on');
pumpingStation.turnOn();
submersiblePump.turnOn('osdf');

let electrApp = [laptop, desktopPC, deskLamp, submersiblePump, circulationPump, pumpingStation]

function getTotalPower(arr){
    return arr.reduce( (sum, item) => item.state ? sum += item.power : sum, 0);
}

function hierarchyElectrApp(arr) {
    return arr.sort( (a, b) => b.power - a.power).map(item => item.name);
}

let sumPower = getTotalPower(electrApp);

let fromMaxToMin = hierarchyElectrApp(electrApp);

console.log(sumPower);
console.log(fromMaxToMin);
