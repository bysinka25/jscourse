window.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line strict
  "use strict";

  function countTimer(deadline) {
    const timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");
    function getTimeRemaing() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return {
        timeRemaining,
        hours,
        minutes,
        seconds,
      };
    }
    function updateClock() {
      const timer = getTimeRemaing();
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      }
      if (timer.timeRemaining < 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }
  countTimer("29 september 2021");
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu"),
      menu = document.querySelector("menu"),
      closeBtn = document.querySelector(".close-btn"),
      menuItems = menu.querySelectorAll("ul>li");
    let count = 0;
    let menuDown = function () {
      count++;
      menu.style.top = count + "1px";
      if (count < 72) {
        setTimeout(menuDown, 10);
      }
    };
    let menuUp = function () {
      let start = Date.now();

      let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        menu.style.left = timePassed / 5 + "px";

        if (timePassed > 3000) {
          clearInterval(timer);
        }
      }, 20);
    };
    const handlerMenu = () => {
      if (
        !menu.style.transform ||
        menu.style.transform === "translate(-100%)"
      ) {
        menu.style.transform = "translate(0)";
      } else {
        menu.style.transform = "translate(-100%)";
      }
    };
    btnMenu.addEventListener("click", () => {
      handlerMenu();
      count = 0;
      menu.style.top = 0;
      menuUp();
    });

    closeBtn.addEventListener("click", () => {
      menuDown();
    });
    menuItems.forEach((elem) => elem.addEventListener("click", handlerMenu));
  };
  toggleMenu();
  const togglePopUp = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn"),
      popupClose = document.querySelector(".popup-close");
    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
      });
    });
    popupClose.addEventListener("click", () => {
      popup.style.display = "none";
    });
  };

  togglePopUp();
});
