let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
    return dollar * oneEuroIs.JPY
};
fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
};
fromYanToPound = (Yan) => {
    return Yan * oneEuroIs.GBP

}
/*
console.log(fromDollarToYen(5))
console.log(fromEuroToDollar(5))
console.log(fromYanToPound(5))
*/

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };