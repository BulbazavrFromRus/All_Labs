document.addEventListener("DOMContentLoaded", function() {
  var images = [
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/1.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/2.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/3.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/4.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/5.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/6.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/7.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/8.jpg',
    '/home/bulba/Desktop/All Labs/lab8/Картинка на Лаб 8/9.jpg'
  ];

  function rotatePieceRandomly(piece) {
    var randomAngle = Math.floor(Math.random() * 4) * 90;
    piece.style.transform = "rotate(" + randomAngle + "deg)";
    piece.dataset.angle = randomAngle.toString();
  }

  function rotatePieceClockwise(piece) {
    var currentAngle = parseInt(piece.dataset.angle || "0");
    var newAngle = (currentAngle + 90) % 360;
    piece.style.transform = "rotate(" + newAngle + "deg)";
    piece.dataset.angle = newAngle.toString();

    checkIfPuzzleCompleted();
  }

  function createPuzzle(images) {
    var puzzleContainer = document.getElementById("puzzleContainer");

    images.forEach(function(imageUrl, index) {
      var piece = document.createElement("img");
      piece.src = imageUrl;
      piece.className = "puzzlePiece";
      piece.id = "piece" + (index + 1);
      rotatePieceRandomly(piece);
      piece.addEventListener("click", function() {
        rotatePieceClockwise(this);
      });
      puzzleContainer.appendChild(piece);
    });
  }

  function checkIfPuzzleCompleted() {
    var puzzlePieces = document.querySelectorAll(".puzzlePiece");
    var allCorrect = true;

    puzzlePieces.forEach(function(piece) {
      var currentAngle = parseInt(piece.dataset.angle || "0");
      if (currentAngle % 360 !== 0) {
        allCorrect = false;
        return;
      }
    });

    if (allCorrect) {
      showRestartButton();
    }
  }

  function showRestartButton() {
    var restartButton = document.createElement("button");
    restartButton.textContent = "Начать игру заново";
    restartButton.addEventListener("click", function() {
      location.reload();
    });

    var puzzleContainer = document.getElementById("puzzleContainer");
    puzzleContainer.appendChild(restartButton);
  }

  createPuzzle(images);
});
