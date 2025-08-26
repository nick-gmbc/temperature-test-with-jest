const {fahrenheitToCelicus}  = require("../temperature-convert.js");

describe ("Temperature Conversion", () => {
    test("Should return a temperature of 212", () =>{
        expect(fahrenheitToCelicus(212)).toBe(100);
    });
    test("Should return a temperature of 0", () =>{
        expect(fahrenheitToCelicus(32)).toBe(0);
    });
    test("Should return a temperature of 0", () =>{
        expect(fahrenheitToCelicus(32)).toBe(0);
    });
    test("Should return a temperature of -17.7778", () =>{
        expect(fahrenheitToCelicus(0).toFixed(4)).toBe("-17.7778");
    });
    test("Should return a temperature of -20.5556", () =>{
        expect(fahrenheitToCelicus(-5).toFixed(4)).toBe("-20.5556");
    });
});