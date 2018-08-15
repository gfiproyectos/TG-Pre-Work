// Declares constant variable kelvin
const kelvin = 280;
// Declares constant variable celsius and subtracts 273 from kelvin
const celsius = kelvin - 273;
// Declares variable fahrenheit and calculates based in celsius
let fahrenheit = celsius * (9 / 5) + 32;
// Use of the Math.floor method to round down the fahrenheit value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)