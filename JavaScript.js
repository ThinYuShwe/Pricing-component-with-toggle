document.addEventListener("DOMContentLoaded", function () {
  const monthlyCost = document.querySelector(".monthlyCost");
  const toggle = document.querySelector(".toggle");

  const basicCost = document.querySelector(".basic .monthlyCost");
  const professionalCost = document.querySelector(".professional .monthlyCost");
  const masterCost = document.querySelector(".master .monthlyCost");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("toggle-active");
    if (toggle.classList.contains("toggle-active")) {
      basicCost.innerHTML = "<span>$</span> 199.99";
      professionalCost.innerHTML = "<span>$</span> 249.99";
      masterCost.innerHTML = "<span>$</span> 399.99";
    } else {
      basicCost.innerHTML = "<span>$</span> 19.99";
      professionalCost.innerHTML = "<span>$</span> 24.99";
      masterCost.innerHTML = "<span>$</span> 39.99";
    }
  });
});
