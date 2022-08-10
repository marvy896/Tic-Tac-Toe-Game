let grids = document.querySelectorAll("[data-cell]");

let currentPiece = "X"

function nextPiece() {
    let retVal
    if(currentPiece == "X") retVal = 'O'
    else retVal = 'X'
    currentPiece = retVal
    return retVal
}

/** @param Cell {number} */
function placeMark(Cell) { 
    let play = document.querySelector(`[data-cell = '${Cell}' ]`) 
    play.innerText = nextPiece() 
}
 

grids.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})
/** @param e {MouseEvent} */      
function handleClick(e){
    console.log('clicked')
    let Click = e.target.getAttribute('data-cell')
    placeMark(Click);
    //place mark
    //check for win
    //check for draw
    //swicth turns
}