function funcaoKelvin() {
    var body = document.querySelector("body")
    var cor = document.q
    var inputKelvin = document.querySelector('#Kelvin')
    var Kelvin = parseFloat(inputKelvin.value)
    var Celsius = Kelvin - 273;
    var Fahrenheit = 1.8 * (Kelvin - 273) + 32;


    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = parseInt(Celsius) + " ºC"
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = parseInt(Kelvin) + " K"
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = parseInt(Fahrenheit) + " ºF"

    var red = ''
    var green = ''
    var blue = ''
    if (Celsius <= 0) {
        red = 0;
        green = 0;
        blue = 255;
    } else if (Celsius <= 50) {
        red = (255 * Celsius / 50);
        green = (255 * Celsius / 50);
        blue = 255 - (255 * Celsius / 50);
    } else if (Celsius <= 100) {
        red = 255;
        green = 255 - (255 * Celsius / 100);
        blue = 0;
    } else {
        red = 255;
        green = 0;
        blue = 0;
    }
    redHex = parseInt(red)
    var r = redHex.toString(16)
    if (r.length < 2) {
        r = "0" + r
    }
    greenHex = parseInt(green)
    var g = greenHex.toString(16)
    if (g.length < 2) {
        g = "0" + g
    }
    blueHex = parseInt(blue)
    var b = blueHex.toString(16)
    if (b.length < 2) {
        b = "0" + b
    }


    var rgb = "#" + r + g + b
    var body = document.querySelector("body")
    var corFundo = body.style.backgroundColor = rgb
}

function funcaoCelsius() {
    var inputCelsius = document.querySelector("#Celsius")
    var Celsius = parseFloat(inputCelsius.value)
    var Kelvin = Celsius + 273
    var Fahrenheit = 1.8 * Celsius + 32

    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = parseInt(Celsius) + " ºC"
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = parseInt(Kelvin) + " K"
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = parseInt(Fahrenheit) + " ºF"

    var red = ''
    var green = ''
    var blue = ''
    if (Celsius <= 0) {
        red = 0;
        green = 0;
        blue = 255;
    } else if (Celsius <= 50) {
        red = (255 * Celsius / 50);
        green = (255 * Celsius / 50);
        blue = 255 - (255 * Celsius / 50);
    } else if (Celsius <= 100) {
        red = 255;
        green = 255 - (255 * Celsius / 100);
        blue = 0;
    } else {
        red = 255;
        green = 0;
        blue = 0;
    }
    redHex = parseInt(red)
    var r = redHex.toString(16)
    if (r.length < 2) {
        r = "0" + r
    }
    greenHex = parseInt(green)
    var g = greenHex.toString(16)
    if (g.length < 2) {
        g = "0" + g
    }
    blueHex = parseInt(blue)
    var b = blueHex.toString(16)
    if (b.length < 2) {
        b = "0" + b
    }


    var rgb = "#" + r + g + b
    var body = document.querySelector("body")
    var corFundo = body.style.backgroundColor = rgb
}

function funcaoFahrenheit() {
    var inputFahrenheit = document.querySelector('#Fahrenheit')
    var Fahrenheit = parseFloat(inputFahrenheit.value)
    var Kelvin = (Fahrenheit - 32) * 5 / 9 + 273.15
    var Celsius = (Fahrenheit - 32) / 1.8

    var outputCelsius = document.querySelector("#r_celsius")
    outputCelsius.textContent = parseInt(Celsius) + " ºC"
    var outputKelvin = document.querySelector("#r_kelvin")
    outputKelvin.textContent = parseInt(Kelvin) + " K"
    var outputFahrenheit = document.querySelector("#r_fahrenheit")
    outputFahrenheit.textContent = parseInt(Fahrenheit) + " ºF"
    var red = ''
    var green = ''
    var blue = ''
    if (Celsius <= 0) {
        red = 0;
        green = 0;
        blue = 255;
    } else if (Celsius <= 50) {
        red = (255 * Celsius / 50);
        green = (255 * Celsius / 50);
        blue = 255 - (255 * Celsius / 50);
    } else if (Celsius <= 100) {
        red = 255;
        green = 255 - (255 * Celsius / 100);
        blue = 0;
    } else {
        red = 255;
        green = 0;
        blue = 0;
    }
    redHex = parseInt(red)
    var r = redHex.toString(16)
    if (r.length < 2) {
        r = "0" + r
    }
    greenHex = parseInt(green)
    var g = greenHex.toString(16)
    if (g.length < 2) {
        g = "0" + g
    }
    blueHex = parseInt(blue)
    var b = blueHex.toString(16)
    if (b.length < 2) {
        b = "0" + b
    }


    var rgb = "#" + r + g + b
    var body = document.querySelector("body")
    var corFundo = body.style.backgroundColor = rgb
}
