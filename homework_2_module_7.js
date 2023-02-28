const laptop = {
    CPU: 'i3-1115G4F',
    GPU: 'Intel UHD Graphics',
    matrix: 'IPS',
    RAM: '8 Gb',
    SSD_M2: 'Kingston 256 Gb'
}

function checkPropsName(obj, nameProp) {
    for (let key in obj) {
        return obj.hasOwnProperty(nameProp);
    }
}

console.log(checkPropsName(laptop, 'mqatrix'));