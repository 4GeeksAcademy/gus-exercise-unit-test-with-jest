test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
/* 
One Dollar should be 146.2617 Yens
One Yen should be 0.0056 Pounds 
*/
test("100 Dollars should be 14626.17 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(100)).toBe(14626.17);
})
test("1000 Yens should be 5.6 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1000)).toBe(5.6);
})