class ElectrApp {
    constructor(name, power) {
        this.equipment = 'electrical appliance';
        this.name = name;
        this.power = power;
        this.state = false;
    }

    turnOn(answer) {
        if (answer === "on") {
            this.state = true;
        } else if ( confirm(`Turn on the ${this.name}?`) ) {
            this.state = true;
        }
    }

    static getTotalPower(sum, item) {
        if (item.state) sum += item.power;
        return sum;
    }

    static hierarchyElectrApp(electrApp1, electrApp2) {
        return electrApp2.power - electrApp1.power;
    }
}

class Compucter extends ElectrApp {
    constructor(name, CPU, RAM, power) {
        super(name);
        this.cpu = CPU;
        this.ram = RAM;
        this.power = power;
    }
}

class Pump extends ElectrApp {
    constructor(name, pressure, depth, power) {
        super(name);
        this.pressure = pressure;
        this.depth = depth;
        this.power = power;
    }
}

const laptop = new Compucter('laptop MSI', 'i5-12100', '16gb', 65);
const desktopPC = new Compucter('PC', 'i7-12900', '32gb', 800);
const deskLamp = new ElectrApp('desk lamp', 60);
const submersiblePump = new Pump('submersible pump', '3bar', '30m', 1500);
const circulationPump = new Pump('circulation pump', '1.5bar', '', 750);
const pumpingStation = new Pump('pumping station', '3bar', '8m', 1000);

laptop.turnOn('on');
pumpingStation.turnOn('on');
submersiblePump.turnOn('on');

let electrApp = [laptop, desktopPC, deskLamp, submersiblePump, circulationPump, pumpingStation]

electrApp.sort(ElectrApp.hierarchyElectrApp);

console.log(electrApp[0].power);

let sumPower = electrApp.reduce(ElectrApp.getTotalPower, 0);

console.log(sumPower);