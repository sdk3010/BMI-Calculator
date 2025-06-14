let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calculateBtn = document.getElementById('calculate-btn');
let resultCard = document.getElementById('result-card');
let bmiValue = document.getElementById('bmi-value');
let bmiCategory = document.getElementById('bmi-category');

calculateBtn.addEventListener('click', function () {
  let weight = parseFloat(weightInput.value);
  let height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    bmiValue.textContent = "";
    bmiCategory.textContent = "Please enter valid numbers!";
    bmiCategory.style.color = "#ef4444";
    resultCard.style.display = "block";
    return;
  }

  let bmi = weight / ((height / 100) ** 2);
  let rounded = bmi.toFixed(1);
  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#4f8ef7";
  } else if (bmi < 25) {
    category = "Normal weight";
    color = "#22c55e";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#f59e1b";
  } else {
    category = "Obese";
    color = "#ef4444";
  }

  bmiValue.textContent = rounded;
  bmiCategory.textContent = category;
  bmiCategory.style.color = color;
  bmiValue.style.color = color;
  resultCard.style.display = "block";
});
