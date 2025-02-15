function convert() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;
    var currencyConversionRate = 1.2; 
  
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var temperatureResult = 0;
  
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operator = document.getElementById("operator").value;
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var calculatorResult = 0;
  
    if (!isNaN(amount)) {
      currencyConversionRate = (fromCurrency === "USD" && toCurrency === "EUR") ? 0.8 : currencyConversionRate;
      var convertedAmount = amount * currencyConversionRate;
      document.getElementById("result").innerText = "Converted Amount: " + convertedAmount.toFixed(2) + " " + toCurrency;
    }
  
    if (!isNaN(temperature)) {
      if (unit === "celsius") {
        temperatureResult = (temperature * 9/5) + 32; 
        document.getElementById("result").innerText = "Temperature in Fahrenheit: " + temperatureResult.toFixed(2);
      } else if (unit === "fahrenheit") {
        temperatureResult = (temperature - 32) * 5/9; 
        document.getElementById("result").innerText = "Temperature in Celsius: " + temperatureResult.toFixed(2);
      }
    }
  
    if (!isNaN(operand1) && !isNaN(operand2)) {
      switch(operator) {
        case "+":
          calculatorResult = operand1 + operand2;
          break;
        case "-":
          calculatorResult = operand1 - operand2;
          break;
        case "*":
          calculatorResult = operand1 * operand2;
          break;
        case "/":
          calculatorResult = operand1 / operand2;
          break;
        default:
          calculatorResult = "Invalid operator";
      }
      document.getElementById("result").innerText = "Calculator Result: " + calculatorResult.toFixed(2);
    }
  }
  