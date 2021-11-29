let board = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

// szuka kolejnego nieuzupełnionego miejsca
function nextEmptySlot(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

//sprawdza czy wartość podana do wstawienia znajduje się już w rzędzie
function checkRow(board, row, value) {
    for (let i = 0; i < board[row].length; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }
    return true;
}

//sprawdza czy wartość podana do wstawienia znajduje się już w kolumnie
function checkColumn(board, column, value) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] === value) {
            return false;
        }
    }
    return true;
}

//sprawdza czy wartość znajduje się już w kwadracie 
function checkSquare(board, row, column, value) {
    let boxRow = Math.floor(row / 3) * 3; //wyznacza wpółrzędną x pierwszego pola kwadratu
    let boxCol = Math.floor(column / 3) * 3; //wyznacza współrzędną y pierwszego pola kwadratu

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[boxRow + r][boxCol + c] === value) {
                return false;
            }
        }
    }
    return true;
};

//sprawdza wszystkie 3 warunki na raz
function checkValue(board, row, column, value) {
    if (checkRow(board, row, value) &&
        checkColumn(board, column, value) &&
        checkSquare(board, row, column, value)) {
        return true;
    }

    return false;
};


//właściwa funkcja
function solve(board) {
    let emptySpot = nextEmptySlot(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // wynik
    if (row === -1) {
        return board;
    }

    // sprawdzanie czy da sie wstawić którąś z wartości (musi spełnić warunki), jeśli tak to wartość jest wpisywana i uruchamiana jest funckja jeszcze raz, a jeśli nie to przechodzimy dalej
    for (let num = 1; num <= 9; num++) {
        if (checkValue(board, row, col, num)) {
            board[row][col] = num;
            solve(board);
        }
    }

    // i sprawdzamy czy rozwiązanie jest pełne, jeśli tak - ustawiamy wartość z powrotem na 0 i zwracamy tablice i wychodzimy z funkcji
    if (nextEmptySlot(board)[0] !== -1)
        board[row][col] = 0;

    // i zwracamy całą tablicę i opuszczamy funkcję
    return board;
}

let solution = solve(board);
for (let item in solution) {
    console.log(solution[item]);
}
