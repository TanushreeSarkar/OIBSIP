// Length converter
document.getElementById('convert-length').addEventListener('click', function() {
    const lengthFrom = document.getElementById('length-from').value;
    const lengthTo = document.getElementById('length-to').value;
    const lengthInput = document.getElementById('length-input').value;

    let result;

    switch (lengthFrom) {
        case 'meter':
            switch (lengthTo) {
                case 'meter':
                    result = lengthInput;
                    break;
                case 'foot':
                    result = lengthInput * 3.28084;
                    break;
                case 'inch':
                    result = lengthInput * 39.3701;
                    break;
            }
            break;
        case 'foot':
            switch (lengthTo) {
                case 'meter':
                    result = lengthInput / 3.28084;
                    break;
                case 'foot':
                    result = lengthInput;
                    break;
                case 'inch':
                    result = lengthInput * 12;
                    break;
            }
            break;
        case 'inch':
            switch (lengthTo) {
                case 'meter':
                    result = lengthInput / 39.3701;
                    break;
                case 'foot':
                    result = lengthInput / 12;
                    break;
                case 'inch':
                    result = lengthInput;
                    break;
            }
            break;
    }

    document.getElementById('length-result').innerHTML = `Result: ${result} ${lengthTo}`;
});

// Weight converter
document.getElementById('convert-weight').addEventListener('click', function() {
    const weightFrom = document.getElementById('weight-from').value;
    const weightTo = document.getElementById('weight-to').value;
    const weightInput = document.getElementById('weight-input').value;

    let result;

    switch (weightFrom) {
        case 'kilogram':
            switch (weightTo) {
                case 'kilogram':
                    result = weightInput;
                    break;
                case 'pound':
                    result = weightInput * 2.20462;
                    break;
                case 'ounce':
                    result = weightInput * 35.274;
                    break;
            }
            break;
        case 'pound':
            switch (weightTo) {
                case 'kilogram':
                    result = weightInput / 2.20462;
                    break;
                case 'pound':
                    result = weightInput;
                    break;
                case 'ounce':
                    result = weightInput * 16;
                    break;
            }
            break;
        case 'ounce':
            switch (weightTo) {
                case 'kilogram':
                    result = weightInput / 35.274;
                    break;
                case 'pound':
                    result = weightInput / 16;
                    break;
                case 'ounce':
                    result = weightInput;
                    break;
            }
            break;
    }

    document.getElementById('weight-result').innerHTML = `Result: ${result} ${weightTo}`;
});

// Temperature converter
document.getElementById('convert-temperature').addEventListener('click', function() {
    const temperatureFrom = document.getElementById('temperature-from').value;
    const temperatureTo = document.getElementById('temperature-to').value;
    const temperatureInput = document.getElementById('temperature-input').value;

    let result;

    switch (temperatureFrom) {
        case 'celsius':
            switch (temperatureTo) {
                case 'celsius':
                    result = temperatureInput;
                    break;
                case 'fahrenheit':
                    result = temperatureInput * 9/5 + 32;
                    break;
                case 'kelvin':
                    result = temperatureInput + 273.15;
                    break;
            }
            break;
        case 'fahrenheit':
            switch (temperatureTo) {
                case 'celsius':
                    result = (temperatureInput - 32) * 5/9;
                    break;
                case 'fahrenheit':
                    result = temperatureInput;
                    break;
                case 'kelvin':
                    result = (temperatureInput - 32) * 5/9 + 273.15;
                    break;
            }
            break;
        case 'kelvin':
            switch (temperatureTo) {
                case 'celsius':
                    result = temperatureInput - 273.15;
                    break;
                case 'fahrenheit':
                    result = (temperatureInput - 273.15) * 9/5 + 32;
                    break;
                case 'kelvin':
                    result = temperatureInput;
                    break;
            }
            break;
    }

    document.getElementById('temperature-result').innerHTML = `Result: ${result} ${temperatureTo}`;
});