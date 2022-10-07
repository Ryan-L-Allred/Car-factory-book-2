//This will be assigned to a new chassis variable.
const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}

/*The createChassis function will be plugged into the chassisObject parameter in each function. This will
be done by storing the createChassis function in its own variable and then putting that variable in as an 
argument.
*/
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    return chassisObject
}



let chassis = createChassis()

let chassisWithSteeringWheel = addSteeringWheel(chassis)
let chassisWithEngine = addEngine(chassis)
let chassisWithWheels = addWheels(chassis)
let chassisWithDriveTrain = addDriveTrain(chassis)
let chassisWithBody = addBody(chassis)
console.log(chassisWithSteeringWheel)
