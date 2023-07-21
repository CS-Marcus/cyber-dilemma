function openPopup() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = "what are you doing in my swamp";
  const correctAnswer2 = "What are you doing in my swamp";
  const resultElement = document.getElementById("result");

  if (userAnswer === correctAnswer || userAnswer === correctAnswer2) {
    const popup = document.getElementById('popup1');
    popup.style.display = 'block';
  } else {
    const popup = document.getElementById('popup2');
    popup.style.display = 'block';
  }
}

function closePopup() {
  window.location.href = 'quiz2.html';
}

function tryAgain() {
  window.location.href = 'page6.html';
}

function showHint() {
  const hintBox = document.getElementById("hintBox");
  hintBox.style.display = "block";

  // Automatically hide the hint box after 6 seconds (6000 milliseconds)
  setTimeout(function () {
    hintBox.style.display = "none";
  }, 6000);
}

/*
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = "lol";
  const resultElement = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    resultElement.textContent = "You are right!";
  } else {
    resultElement.textContent = "You are wrong!";
  }
}*/
