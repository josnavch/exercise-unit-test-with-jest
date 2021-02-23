/*
// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

*/

const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./exchange.js');

test('Exchange $75 Dollars to Yen', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(75);

    // we expect the exchange $75 to Yen to be 9592.5
    expect(total).toBe(9592.5);
});

test('Exchange $75 Dollars to EUROS', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromEuroToDollar(75);

    // we expect the exchange $75 to EURO to be 90
    expect(total).toBe(90);
});

test('Exchange $75 YAN to England Pound', () => {
    //inside the test_exchange we call our exchange one number for a currency
    let total = fromYanToPound(75);

    // we expect the exchange $75 to England Pound to be 60
    expect(total).toBe(60);
});