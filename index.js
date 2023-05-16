function funcaoKelvin() {
    var body = document.querySelector("body")
    var cor = document.q
    var inputKelvin = document.querySelector('#Kelvin')
    var Kelvin = parseFloat(inputKelvin.value)
    var Celsius = Kelvin - 273;
    var Fahrenheit = 1.8 * (Kelvin - 273) + 32;


    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = Celsius
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = Kelvin
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = Fahrenheit

    if (Celsius >= 100) {
        body.style.backgroundColor = red
    }
}

function funcaoCelsius() {
    var inputCelsius = document.querySelector("#Celsius")
    var Celsius = parseFloat(inputCelsius.value)
    var Kelvin = Celsius + 273
    var Fahrenheit = 1.8 * Celsius + 32

    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = Celsius
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = Kelvin
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = Fahrenheit
}

function funcaoFahrenheit() {
    var inputFahrenheit = document.querySelector('#Fahrenheit')
    var Fahrenheit = parseFloat(inputFahrenheit.value)
    var Kelvin = (75 * Fahrenheit + 459.67) * 5 / 9
    var Celsius = (Fahrenheit - 32) / 1.8

    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = Celsius
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = Kelvin
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = Fahrenheit
}
