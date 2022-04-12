// the LATEST EVENTS counter Down

let counter = setInterval(() => {
  // get date of now
  let nowDate = new Date().getTime();
  //get the end of counter down date
  let countDateDown = new Date("Jan 1, 2023 0:0:0").getTime();
  //get the difference between counter down date and now date
  let deference = countDateDown - nowDate;
  let daysCount = Math.floor(deference / (1000 * 60 * 60 * 24)); // get days
  let hoursCount = Math.floor(
    (deference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // get Hours
  let minutesCount = Math.floor((deference % (1000 * 60 * 60)) / (1000 * 60)); // get Minutes
  let secondsCount = Math.floor((deference % (1000 * 60)) / 1000); // get Seconds
  days = document.querySelector(".days .num").innerHTML =
    daysCount < 100 ? `0${daysCount}` : daysCount;
  Hours = document.querySelector(".Hours .num").innerHTML =
    hoursCount < 10 ? `0${hoursCount}` : hoursCount;
  Minutes = document.querySelector(".Minutes .num").innerHTML =
    minutesCount < 10 ? `0${minutesCount}` : minutesCount;
  Seconds = document.querySelector(".Seconds .num").innerHTML =
    secondsCount < 10 ? `0${secondsCount}` : secondsCount;
  // shutdown the code when time end
  if (deference === 0) {
    clearInterval(counter);
  }
}, 1000);
// control content of Our Awesome Stats
// Stats Increase Number
let nums = document.querySelectorAll(".stat .number");
let section = document.querySelector(".Awesome-Stats");
let start = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!start) {
      nums.forEach((num) => startCount(num));
    }
    start = true;
  }
};
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
