// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function () {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num1) {
    function multiply () {
        return num1 * 5;

    }

    return multiply;
}

//describe('fareDoubler()', function () {
    // it('is a function', function () {
    //     expect(fareDoubler).to.be.a('function');
    //   });

    const fareDoubler = function multiply(num1) {
        return (num1 * 2)
    }

    const fareTripler = function multiply(num1) {
        return (num1 * 3);
    }

    const selectDifferentDrivers = (drivers, driverFunctionPicker) => driverFunctionPicker(drivers.slice(0, 2));