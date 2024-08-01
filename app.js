// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes japoneses
    let valueInYen = valueInDollar*(oneEuroIs["JPY"] / oneEuroIs["USD"]).toFixed(4);
    // Retornamos el valor en yenes japoneses
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen*(oneEuroIs["GBP"] / oneEuroIs["JPY"]).toFixed(4);
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };