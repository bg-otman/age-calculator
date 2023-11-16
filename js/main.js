const calculateBtn = document.querySelector(".btn");
const yearElem = document.querySelector(".year");
const monthsElem = document.querySelector(".month");
const daysElem = document.querySelector(".days");
const date = new Date();

const birthYear = document.getElementById("year-inpt");
const birthMonth = document.getElementById("month-inpt");
const birthDay = document.getElementById("day-inpt");
const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
////

calculateBtn.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  if (birthDay.value && birthMonth.value && birthYear.value) {
    if (
      birthDay.value > 31 ||
      birthDay.value < 1 ||
      birthMonth.value > 12 ||
      birthDay.value < 1 ||
      birthYear.value > currentYear ||
      birthYear.value < 1961
    ) {
      invalidDate();
    } else {
      if (birthDay.value > currentDay) {
        currentDay += monthsDays[currentMonth - 1];
        currentMonth--;
      }
      if (birthMonth.value > currentMonth) {
        currentMonth += 12;
        currentYear--;
      }
      daysElem.textContent = currentDay - birthDay.value;
      monthsElem.textContent = currentMonth - birthMonth.value;
      yearElem.textContent = currentYear - birthYear.value;
      document.querySelector(".age-box").classList.remove("d-none");
    }
  }
}

function invalidDate() {
  document.querySelector(".alert").style.display = "block";
  document.querySelector(".age-box").classList.add("d-none");

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculateAge();
  }
});
