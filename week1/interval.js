timeLeft = 30;

const printTimer = () => {
  console.log(timeLeft);
  timeLeft--;
}

setInterval(printTimer, 1000);