function updateAnalogClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour + minute / 60) * 30;
  const minuteDeg = (minute + second / 60) * 6;
  const secondDeg = second * 6;

  const hourHand = document.getElementById('hour-hand');
  const minuteHand = document.getElementById('minute-hand');
  const secondHand = document.getElementById('second-hand');

  if (hourHand && minuteHand && secondHand) {
    hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
  }
}

function startAnalogClock() {
  updateAnalogClock();
  setInterval(updateAnalogClock, 1000);
}

if (typeof window !== 'undefined') {
  window.onload = function() {
    if (
      document.getElementById('hour-hand') &&
      document.getElementById('minute-hand') &&
      document.getElementById('second-hand')
    ) {
      startAnalogClock();
    }
  };
}
