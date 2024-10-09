const puzzlePieces = document.querySelectorAll('.puzzle-piece');
let count = 0;

puzzlePieces.forEach(piece => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragover', dragOver);
  piece.addEventListener('drop', dragDrop);
});

function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function dragDrop(event) {
  const data = event.dataTransfer.getData('text');
  const draggedElement = document.getElementById(data);
  const dropzone = event.target;

  if (!dropzone.childNodes.length) {
    dropzone.appendChild(draggedElement);
    count++;

    if (count === puzzlePieces.length) {
      document.getElementById('message').innerText = 'Конец!';
    }
  }
}
