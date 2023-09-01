/*--------------------------------------------------
    BMI Calculator
---------------------------------------------------*/
function calculateBMI() {
    var weight = parseFloat(document.bmiCalc.weight.value);
    var height = parseFloat(document.bmiCalc.height.value);

    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height * height);
        document.bmiCalc.bmi.value = finalBmi.toFixed(2);

        var meaning = "";
        if (finalBmi < 18.5) {
            meaning = "Abaixo do Peso";
        } else if (finalBmi < 25) {
            meaning = "Peso Ideal";
        } else if (finalBmi < 30) {
            meaning = "Sobrepeso";
        } else if (finalBmi < 35) {
            meaning = "Obesidade Grau 1";
        } else {
            meaning = "Obesidade Extrema";
        }

        document.bmiCalc.meaning.value = meaning;
    } else {
        alert("Please fill in all fields.");
    }
}
