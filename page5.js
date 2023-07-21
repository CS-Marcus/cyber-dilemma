let score = 0;

function checkAnswer(choice) {
  
  if (choice === 2) {
    const popup = document.getElementById('popup2');
    popup.style.display = 'block';

  } else if (choice === 1) {
    const popup = document.getElementById('popup1');
    popup.style.display = 'block';
  }
  else {
    const popup = document.getElementById('popup3');
    popup.style.display = 'block';
  }
}

function closePopup() {
  window.location.href = 'page6.html';
}
