const inputEL = document.getElementById("input-el");
const submitBtn = document.getElementById("submit-btn");
const lengthEl = document.getElementById("length-result-el");
const volumeEl = document.getElementById("volume-result-el");
const massEl = document.getElementById("mass-result-el");


submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let input = parseFloat(inputEL.value);

    if (!input) {
        alert("Please enter a valid number");
    } else {
        convert(input);
    }
});

function convert(nInput) {
    lengthEl.textContent = `${nInput} meters = ${(nInput * 3.28084).toFixed(3)} feet | ${nInput} feet = ${(nInput * 0.3048).toFixed(3)} meters`;
    volumeEl.textContent = `${nInput} liters = ${(nInput * 0.2199693).toFixed(3)} gallons | ${nInput} gallons = ${(nInput * 4.54609).toFixed(3)} liters`;
    massEl.textContent = `${nInput} kilograms = ${(nInput * 2.204623).toFixed(3)} pounds | ${nInput} pounds = ${(nInput * 0.4535924).toFixed(3)} kilograms`;
}