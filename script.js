let timerInterval;
let timeTakenInterval;
let startTime;

// Time Stayed: it means how much time I have spent on this Earth.
function updateTimeTaken() {
  const now = new Date();
  const startDate = new Date('January 1, 2024, 00:00:00');

  // Calculate the time difference in milliseconds
  const timeDifference = now - startDate;

  // Calculate years, months, days, hours, minutes, and seconds
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const timeTakenElement = document.getElementById('time-taken');
  timeTakenElement.innerText = ` ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Countdown Timer: it means how much time is left to live.
function updateCountdown() {
  const targetDate = new Date('Tuesday, 31 December 2024, 23:59:59');
  const now = new Date();

  if (targetDate <= now) {
    document.getElementById('countdown-timer').innerHTML = 'Event has already occurred.';
    clearInterval(timerInterval);
    return;
  }

  let years = targetDate.getFullYear() - now.getFullYear();
  let months = targetDate.getMonth() - now.getMonth();
  let days = targetDate.getDate() - now.getDate();
  let hours = targetDate.getHours() - now.getHours();
  let minutes = targetDate.getMinutes() - now.getMinutes();
  let seconds = targetDate.getSeconds() - now.getSeconds();

  // Adjust negative values
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const daysInLastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
    days += daysInLastMonth;
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  const countdownElement = document.getElementById('countdown-timer');
  countdownElement.innerHTML = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call your existing countdown update function every second
timerInterval = setInterval(updateCountdown, 1000);

// Call your time taken update function every second
timeTakenInterval = setInterval(updateTimeTaken, 1000);
