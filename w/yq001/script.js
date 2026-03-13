

function generateNumber() {
  const random = Math.floor(Math.random() * 100); // 0~99
  const twoDigit = random.toString().padStart(2, '0'); // 转为两位数
  document.getElementById('number-display').textContent = twoDigit;
}
