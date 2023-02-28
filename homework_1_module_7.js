const laptop = {
    CPU: 'i3-1115G4F',
    GPU: 'Intel UHD Graphics',
    matrix: 'IPS',
    RAM: '8 Gb',
    SSD_M2: 'Kingston 256 Gb'
}

const laptopMSI = Object.create(laptop);

laptopMSI.CPU = 'i7-11700F';
laptopMSI.GPU = 'GeForce RTX 3050 Ti';
laptopMSI.matrix = 'IPS';
laptopMSI.maxScreenRefreshRate = '144 Hz';
laptopMSI.gaming = 'yes';
laptopMSI.RAM = '16 Gb';
laptopMSI.SSD_M2 = 'Kingston 512 Gb';
laptopMSI.HDD = '1 Tb';

function showOwnProps(obj) {
    let result = '';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            result += 'Ключ - ' + key + ', значение - ' + obj[key] + '\n';
        }
    }
    console.log(result);
}

showOwnProps(laptopMSI);