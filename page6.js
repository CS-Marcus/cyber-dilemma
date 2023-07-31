let attempts = 0;

  function openPopup() {
    const userAnswer = document.getElementById("answer").value;
    const correctAnswer = "what are you doing in my swamp"; // The correct answer
    const correctAnswer2 = "what are you doing in my swamp "; // The correct answer

    if (userAnswer.toLowerCase() === correctAnswer|| userAnswer.toLowerCase() === correctAnswer2) {
      document.getElementById("popup1").style.display = "block";
    } else {
      attempts++;
      if (attempts === 1) {
        document.getElementById("popup2").style.display = "block";
      } 
      else if(attempts === 2) {
        document.getElementById("popup3").style.display = "block";
        document.getElementById("popup3").querySelector("button").innerText = "Try One More Time";
      }
      else if(attempts === 3) {
        // If the user has attempted 3 times, allow them to move on
        document.getElementById("popup4").style.display = "block";
        document.getElementById("popup4").querySelector("button").innerText = "Move On";
        document.getElementById("popup4").querySelector("button").setAttribute("onclick", "moveOn()");
      }
    }
  }



  function moveOn() {
    // window.location.href = "quiz2.html";
    var url = "https://docs.google.com/forms/d/e/1FAIpQLScJLa6FQbNpu_68K1i2ImP4Y3izDPHOTbOS6NCv-ptsiIW-_Q/viewform?usp=sharing";  //link to data collecton sheet
    window.open(url);
  }

function closePopup() {
  // window.location.href = 'quiz2.html';
  var url = "https://docs.google.com/forms/d/e/1FAIpQLScJLa6FQbNpu_68K1i2ImP4Y3izDPHOTbOS6NCv-ptsiIW-_Q/viewform?usp=sharing";  //link to data collecton sheet
  window.open(url);
}

function tryAgain() {
  document.getElementById("popup2").style.display = "none";
  document.getElementById("popup3").style.display = "none";
}

function showHint() {
  const hintBox = document.getElementById("hintBox");
  hintBox.style.display = "block";

  // Automatically hide the hint box after 6 seconds (6000 milliseconds)
  setTimeout(function () {
    hintBox.style.display = "none";
  }, 6000);
}
