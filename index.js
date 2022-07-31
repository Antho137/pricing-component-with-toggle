// event that triggers when the checked state changes

let toggle = document.getElementById("toggle");
let annuallyPrice = document.querySelectorAll(".annuallyPrice");
let monthlyPrice = document.querySelectorAll(".monthlyPrice");

toggle.addEventListener('change', e => {
    if (e.target.checked) {
        annuallyPrice.forEach(price => price.classList.add('hidden'));
        monthlyPrice.forEach(price => price.classList.remove('hidden'));
    } else {
        annuallyPrice.forEach(price => price.classList.remove('hidden'));
        monthlyPrice.forEach(price => price.classList.add('hidden'));
    } 
});