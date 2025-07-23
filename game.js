  let score = 0;
  let playerName = 'Player1';
  document.getElementById('player-name').innerHTML = `Người chơi: <b>${playerName}</b>`;
  document.getElementById('player-score').innerHTML = `Điểm: <b>${score}</b>`;
  let currentRandom = null;
  function randomNumber() {
    let random = Math.random();
    let randomNumber = Math.floor(random * 1000) + 1; 
    let formattedNumber = randomNumber.toString().padStart(3, '0');
    return formattedNumber;
  }
  function updateCircle(num) {
    document.getElementById('random-circle').textContent = num;
  }
  document.getElementById('check-btn').addEventListener('click', function() {
    const userNum = document.getElementById('user-number').value.padStart(3, '0');
    currentRandom = randomNumber();
    updateCircle(currentRandom);
    if (!/^[0-9]{3}$/.test(userNum)) {
      document.getElementById('game-message').textContent = 'Bạn chưa nhập số hợp lệ (3 chữ số)!';
      return;
    }
    if (userNum === currentRandom) {
      score += 20;
      document.getElementById('game-message').textContent = 'Chúc mừng! Bạn đã đoán đúng! +20 điểm';
    } else {
      document.getElementById('game-message').textContent = 'Sai rồi! Số đúng là ' + currentRandom;
    }
    document.getElementById('player-score').innerHTML = `Điểm: <b>${score}</b>`;
  });
  document.getElementById('even-odd-btn').addEventListener('click', function() {
    const checked = document.querySelector('input[name="even-odd"]:checked');
    if (!checked) {
      document.getElementById('game-message').textContent = 'Bạn chưa chọn chẵn/lẻ!';
      return;
    }
    currentRandom = randomNumber();
    updateCircle(currentRandom);
    const isEven = parseInt(currentRandom, 10) % 2 === 0;
    if ((checked.value === 'even' && isEven) || (checked.value === 'odd' && !isEven)) {
      score += 10;
      document.getElementById('game-message').textContent = 'Chúc mừng! Bạn đã chọn đúng! +10 điểm';
    } else {
      document.getElementById('game-message').textContent = 'Sai rồi! Số đúng là ' + currentRandom + (isEven ? ' (Chẵn)' : ' (Lẻ)');
    }
    document.getElementById('player-score').innerHTML = `Điểm: <b>${score}</b>`;
    // currentRandom = null;
    // updateCircle('?');
  });