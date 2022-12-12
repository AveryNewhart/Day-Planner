let timeDisplayEl = $('#time-display');

//targeting the save button for each hour
let saveBtnHr9 = document.getElementById("save-hour-9-btn");
let saveBtnHr10 = document.getElementById("save-hour-10-btn");
let saveBtnHr11 = document.getElementById("save-hour-11-btn");
let saveBtnHr12 = document.getElementById("save-hour-12-btn");
let saveBtnHr13 = document.getElementById("save-hour-13-btn");
let saveBtnHr14 = document.getElementById("save-hour-14-btn");
let saveBtnHr15 = document.getElementById("save-hour-15-btn");
let saveBtnHr16 = document.getElementById("save-hour-16-btn");
let saveBtnHr17 = document.getElementById("save-hour-17-btn");

//targeting the user id inside the text areas of each hour
let userInpHr9 = document.getElementById("user-inp-hr-9");
let userInpHr10 = document.getElementById("user-inp-hr-10");
let userInpHr11 = document.getElementById("user-inp-hr-11");
let userInpHr12 = document.getElementById("user-inp-hr-12");
let userInpHr13 = document.getElementById("user-inp-hr-13");
let userInpHr14 = document.getElementById("user-inp-hr-14");
let userInpHr15 = document.getElementById("user-inp-hr-15");
let userInpHr16 = document.getElementById("user-inp-hr-16");
let userInpHr17 = document.getElementById("user-inp-hr-17");

// Setting the inputed text into the local sotrage
saveBtnHr9.addEventListener("click", function() {
  let userInpHr9 = document.getElementById("user-inp-hr-9").value;

  localStorage.setItem("userInpHr9", userInpHr9);

});

saveBtnHr10.addEventListener("click", function() {
  let userInpHr10 = document.getElementById("user-inp-hr-10").value;

  localStorage.setItem("userInpHr10", userInpHr10);

});

saveBtnHr11.addEventListener("click", function() {
  let userInpHr11 = document.getElementById("user-inp-hr-11").value;

  localStorage.setItem("userInpHr11", userInpHr11);

});

saveBtnHr12.addEventListener("click", function() {
  let userInpHr12 = document.getElementById("user-inp-hr-12").value;

  localStorage.setItem("userInpHr12", userInpHr12);

});

saveBtnHr13.addEventListener("click", function() {
  let userInpHr13 = document.getElementById("user-inp-hr-13").value;

  localStorage.setItem("userInpHr13", userInpHr13);

});

saveBtnHr14.addEventListener("click", function() {
  let userInpHr14 = document.getElementById("user-inp-hr-14").value;

  localStorage.setItem("userInpHr14", userInpHr14);

});

saveBtnHr15.addEventListener("click", function() {
  let userInpHr15 = document.getElementById("user-inp-hr-15").value;

  localStorage.setItem("userInpHr15", userInpHr15);

});

saveBtnHr16.addEventListener("click", function() {
  let userInpHr16 = document.getElementById("user-inp-hr-16").value;

  localStorage.setItem("userInpHr16", userInpHr16);

});

saveBtnHr17.addEventListener("click", function() {
  let userInpHr17 = document.getElementById("user-inp-hr-17").value;

  localStorage.setItem("userInpHr17", userInpHr17);

});

// Getting and displaying the text from the local storage
let userStoredDataHr9 = localStorage.getItem("userInpHr9");
userInpHr9.textContent = userStoredDataHr9;

let userStoredDataHr10 = localStorage.getItem("userInpHr10");
userInpHr10.textContent = userStoredDataHr10;

let userStoredDataHr11 = localStorage.getItem("userInpHr11");
userInpHr11.textContent = userStoredDataHr11;

let userStoredDataHr12 = localStorage.getItem("userInpHr12");
userInpHr12.textContent = userStoredDataHr12;

let userStoredDataHr13 = localStorage.getItem("userInpHr13");
userInpHr13.textContent = userStoredDataHr13;

let userStoredDataHr14 = localStorage.getItem("userInpHr14");
userInpHr14.textContent = userStoredDataHr14;

let userStoredDataHr15 = localStorage.getItem("userInpHr15");
userInpHr15.textContent = userStoredDataHr15;

let userStoredDataHr16 = localStorage.getItem("userInpHr16");
userInpHr16.textContent = userStoredDataHr16;

let userStoredDataHr17 = localStorage.getItem("userInpHr17");
userInpHr17.textContent = userStoredDataHr17;

// Displaying the current date and time using dayjs
function displayTime() {
  let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
  timeDisplayEl.text(rightNow);
};

displayTime();
setInterval(displayTime, 1000);

// Displaying the current color blocks referencing the current time.
function displayColors() {
  let time = dayjs().format("H");

  for (let i=9; i < 18; i++) {
    let currentHourEl = $('.currentHour').find(`[data-time=${i}]`)
      if (time == i) {
        currentHourEl.addClass("present");
      } else if (time > i) {
        currentHourEl.addClass("past");
      } else {
        currentHourEl.addClass("future")
      }
  }
}

displayColors();
