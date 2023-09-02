let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');

function makeMove(index) {
    if (!cells[index].innerHTML) {
        cells[index].innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;

        if (checkWinner()) {
            status.textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
            cells.forEach(cell => (cell.style.pointerEvents = 'none'));
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
    });
    currentPlayer = 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
}

resetBoard();
