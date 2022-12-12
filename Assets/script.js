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



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
  

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

 $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function displayTime() {
  let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
  timeDisplayEl.text(rightNow);
};

displayTime();
setInterval(displayTime, 1000);

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


  // add class to row by comparing project date to today's date
  //look back at 5 mini challenge
  //if (projectDate.isBefore(today)) {
    //rowEl.addClass('project-late');
  //} else if (projectDate.isSame(today)) {
    //rowEl.addClass('project-today');
  //}ind


  //have text pop up on the application when you click the save button saying "appt added to localStorage"