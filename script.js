let grids = document.querySelectorAll("[data-cell]");
grids.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

let currentPiece = "X"


function nextPiece() {
    let retVal
    if (currentPiece == "X") retVal = 'O'
    else retVal = 'X'
    currentPiece = retVal
    return retVal
}

/** @param Cell {number} */
function placeMark(Cell) {
    let play = document.querySelector(`[data-cell = '${Cell}' ]`)
    play.innerText = nextPiece()
}

let Winning_Combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin() {
    for (combination of Winning_Combinations) {
        let CheckWin = combination.map(index => {
            return grids[index].innerText
        })
        if (CheckWin[0] == CheckWin[1] && CheckWin[2] == CheckWin[1]) {
            return CheckWin[0]
        }
        console.log(CheckWin)
    }
}
function checkDraw() {
    for (const element of grids) {
        if (element.innerText == '')
            return false
    }
    return true;
}


function Win() {
    let selectText = document.querySelector(`[data-winning-message-text]`)
    let ChooseWin = currentPiece + ' WINS'
    selectText.innerText = ChooseWin;
    let Winnings = document.getElementById("winnerMessage")
    Winnings.classList.add('show');
    //    return document.getElementsByClassName('#show')
}

function Draw() {
    let SelectText = document.querySelector(`[data-draw-message-text]`)
    let chooseDraw = 'Its a Draw'
    SelectText.innerText = chooseDraw;
    let Draws = document.getElementById("DrawMessage")
    Draws.classList.add('draw');
}

/** @param e {MouseEvent} */
function handleClick(e) {
    let Click = e.target.getAttribute('data-cell')
    placeMark(Click);
    let PlayerWon = checkWin()
    if (PlayerWon) {
        Win()
        compute(PlayerWon)
    }
    else if (checkDraw()) {
        Draw()
    }
}

let DispO = document.getElementById("DispO");
let DispX = document.getElementById("DispX");
let CountO = + localStorage.getItem('CountO') || 0;
let CountX = + localStorage.getItem('CountX') || 0;
DispO.innerText = CountO;
DispX.innerText = CountX;
// let displayO = [];
// let displayX = [];
function compute(ChooseWin) {
    if (ChooseWin == 'O') {
        CountO += 1
        localStorage.setItem('CountO', CountO)
        DispO.innerText = CountO;
    }
    else if (ChooseWin == 'X') {
        CountX += 1
        localStorage.setItem('CountX', CountX)
        DispX.innerText = CountX;
    }
}
DispO.innerText = CountO;

let restartButton = document.getElementById("restartButton")
restartButton.addEventListener('click', Restart);

let restartButton2 = document.getElementById("restartButton2")
restartButton2.addEventListener('click', Restart);

function Restart() {
    window.location.reload();
}
let Reset = document.getElementById("reset")
Reset.addEventListener('click', reSet);

function reSet() {
    window.localStorage.clear()
    Restart()
}
//place mark
    //check for win
    //check for draw
    //swicth turns