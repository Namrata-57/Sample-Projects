//Temperature in Kelvin which remains constant.
const kelvin = 1000;
console.log('Kelvin: ', kelvin);

// Temperature in Kelvin converted into Celsius.
let celsius = kelvin - 273;
console.log('Celsius: ', celsius + ' degree');

// Getting temperature in Fahrenheit with the help of formula.
let fahrenheit = (celsius*(9/5)+32);

// Getting Newton temperature.
let newton = (celsius*(33/100));

//if there will be any decimal number, it will be round off. 
fahrenheit = Math.floor(fahrenheit); 
newton = Math.floor(newton);

// Printing using string literals.
console.log(`The temperature is ${fahrenheit} degrees Fahremheit.`);
console.log(`The temperature is ${newton} degrees Newton.`)
