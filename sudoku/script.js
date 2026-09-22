// ===============================
// SUDOKU DATA
// ===============================

const puzzle = [

    [5, 3, 0, 0, 7, 0, 0, 0, 0],

    [6, 0, 0, 1, 9, 5, 0, 0, 0],

    [0, 9, 8, 0, 0, 0, 0, 6, 0],

    [8, 0, 0, 0, 6, 0, 0, 0, 3],

    [4, 0, 0, 8, 0, 3, 0, 0, 1],

    [7, 0, 0, 0, 2, 0, 0, 0, 6],

    [0, 6, 0, 0, 0, 0, 2, 8, 0],

    [0, 0, 0, 4, 1, 9, 0, 0, 5],

    [0, 0, 0, 0, 8, 0, 0, 7, 9]

];


// ===============================
// CORRECT SOLUTION
// ===============================

const solution = [

    [5, 3, 4, 6, 7, 8, 9, 1, 2],

    [6, 7, 2, 1, 9, 5, 3, 4, 8],

    [1, 9, 8, 3, 4, 2, 5, 6, 7],

    [8, 5, 9, 7, 6, 1, 4, 2, 3],

    [4, 2, 6, 8, 5, 3, 7, 9, 1],

    [7, 1, 3, 9, 2, 4, 8, 5, 6],

    [9, 6, 1, 5, 3, 7, 2, 8, 4],

    [2, 8, 7, 4, 1, 9, 6, 3, 5],

    [3, 4, 5, 2, 8, 6, 1, 7, 9]

];


// ===============================
// CURRENT BOARD
// ===============================

let board = [];

let selectedRow = -1;

let selectedCol = -1;

let mistakes = 0;

let seconds = 0;

let timer;


// ===============================
// START GAME
// ===============================

function startGame() {

    board = puzzle.map(row => [...row]);

    mistakes = 0;

    seconds = 0;

    selectedRow = -1;

    selectedCol = -1;

    document.getElementById("mistakes").innerText = "0";

    document.getElementById("timer").innerText = "00:00";

    createBoard();

    clearInterval(timer);

    timer = setInterval(updateTimer, 1000);
}


// ===============================
// CREATE BOARD
// ===============================

function createBoard() {

    const boardElement =
        document.getElementById("board");

    boardElement.innerHTML = "";


    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            const cell =
                document.createElement("div");


            cell.classList.add("cell");


            cell.dataset.row = row;

            cell.dataset.col = col;


            if (board[row][col] !== 0) {

                cell.innerText =
                    board[row][col];

            }


            // Original number

            if (puzzle[row][col] !== 0) {

                cell.classList.add("fixed");

            }


            cell.addEventListener(
                "click",
                function () {

                    selectCell(row, col);

                }
            );


            boardElement.appendChild(cell);
        }
    }
}


// ===============================
// SELECT CELL
// ===============================

function selectCell(row, col) {

    // Cannot select original number

    if (puzzle[row][col] !== 0) {

        return;
    }


    selectedRow = row;

    selectedCol = col;


    const cells =
        document.querySelectorAll(".cell");


    cells.forEach(cell => {

        cell.classList.remove("selected");

    });


    const index =
        row * 9 + col;


    cells[index].classList.add("selected");
}


// ===============================
// NUMBER CLICK
// ===============================

function numberClick(number) {

    // No cell selected

    if (
        selectedRow === -1 ||
        selectedCol === -1
    ) {

        alert("First select an empty cell!");

        return;
    }


    // Cannot change fixed number

    if (
        puzzle[selectedRow][selectedCol] !== 0
    ) {

        return;
    }


    // Correct number

    if (
        solution[selectedRow][selectedCol]
        === number
    ) {

        board[selectedRow][selectedCol] =
            number;


        createBoard();


        selectCell(
            selectedRow,
            selectedCol
        );


        checkWin();

    }


    // Wrong number

    else {

        mistakes++;


        document.getElementById(
            "mistakes"
        ).innerText = mistakes;


        if (mistakes >= 3) {

            alert(
                "Game Over! You made 3 mistakes."
            );

            newGame();

        }

    }
}


// ===============================
// CHECK WIN
// ===============================

function checkWin() {

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            if (
                board[row][col] !==
                solution[row][col]
            ) {

                return;

            }
        }
    }


    clearInterval(timer);


    alert(
        "🎉 Congratulations! You solved Sudoku!"
    );
}


// ===============================
// ERASE
// ===============================

function erase() {

    if (
        selectedRow === -1 ||
        selectedCol === -1
    ) {

        return;
    }


    if (
        puzzle[selectedRow][selectedCol] !== 0
    ) {

        return;
    }


    board[selectedRow][selectedCol] = 0;


    createBoard();


    selectCell(
        selectedRow,
        selectedCol
    );
}


// ===============================
// RESET GAME
// ===============================

function resetGame() {

    board = puzzle.map(row => [...row]);

    mistakes = 0;

    seconds = 0;


    document.getElementById(
        "mistakes"
    ).innerText = "0";


    document.getElementById(
        "timer"
    ).innerText = "00:00";


    createBoard();

}


// ===============================
// NEW GAME
// ===============================

function newGame() {

    startGame();

}


// ===============================
// TIMER
// ===============================

function updateTimer() {

    seconds++;


    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        seconds % 60;


    const time =
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(remainingSeconds).padStart(
            2,
            "0"
        );


    document.getElementById(
        "timer"
    ).innerText = time;
}


// ===============================
// START
// ===============================

startGame();