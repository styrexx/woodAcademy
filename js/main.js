// The Asked Questions Section

// const quest = document.querySelectorAll(".qa .quest-ans .sub-qa .quest");
const questArray = document.querySelectorAll(".qa .quest-ans .sub-qa");

questArray.forEach(function (qs, index) {
  if (index !== 0) {
    qs.classList.remove("active");
  }
  qs.addEventListener("click", function () {
    questArray.forEach(function (qs) {
      qs.classList.remove("active");
    });
    qs.classList.toggle("active");
  });
});
