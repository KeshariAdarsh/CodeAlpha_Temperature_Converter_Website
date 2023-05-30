function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput");
    var convertFrom = document.getElementById("convertFrom").value;
    var convertTo = document.getElementById("convertTo").value;
    var resultElement = document.getElementById("result");
    
    if (convertFrom === convertTo) {
        resultElement.innerText = "Result: " + temperatureInput.value;
        return;
    }
    
    var temperature = parseFloat(temperatureInput.value);
    var convertedTemperature;
    
    if (convertFrom === "celsius" && convertTo === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    }
    
    resultElement.innerText = "Result: " + convertedTemperature.toFixed(2);
}
