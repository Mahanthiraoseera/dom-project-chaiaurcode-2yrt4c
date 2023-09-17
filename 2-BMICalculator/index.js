const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmiResults = document.querySelector('#bmiResults');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a Valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `You are Under weight, as your bmi is ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `You are Normal weight, as your bmi is ${bmi}`;
    } else {
      results.innerHTML = `You are Over weight, as your bmi is ${bmi}`;
    }
  }
});
