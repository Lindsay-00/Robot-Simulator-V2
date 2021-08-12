
document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const moves = document.querySelector("#moves-container")
  const moveBtn = document.querySelector("#move-button")

  document.addEventListener("keydown", (evnt) => {
    const move = document.createElement('li')
    if (evnt.key === "ArrowUp") {
      move.textContent = "up"
    }
    else if (evnt.key === "ArrowDown") {
      move.textContent = "down"
    }
    else if (evnt.key === "ArrowRight") {
      move.textContent = "right"
    }
    else if (evnt.key === "ArrowLeft") {
      move.textContent = "left"
    }
    moves.append(move)
  })

  moveBtn.addEventListener('click', (evnt) => {

    
    let timer = setInterval(() => {
      const currMove = moves.querySelector('li')
      if (currMove != null) {
        move(currMove.textContent)
        currMove.remove()
      }
      else {
        clearInterval(timer)
      }
    }, 500)


  })


})
