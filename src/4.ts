export default class Four {
    numbers: number[];
    boards: number[][][];
    markedBoards: number[][][];

    constructor(numbers: number[], boards: number[][][]) {
        this.numbers = numbers;
        this.boards = boards;
        this.markedBoards = this.boards.map(board => board.map(row => row.map(_ => 0)));
    }


    updateBoard(board: number[][], num: number, boardIndex: number) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === num) {
                    const markedBoard = this.markedBoards[boardIndex];
                    markedBoard[i][j] = 1;
                    if (this.checkBoard(markedBoard)) {
                        return this.scoreBoard(board, markedBoard, num);
                    }
                }
            }
        }
    }

    checkBoard(board: number[][]): boolean {
        const rowMatch = board.some(row => row.every(num => num === 1));
        let colMatch = false;

        column:
        for (let i = 0; i < board[i].length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] !== 1) {
                    break column;
                }
                colMatch = true;
            }
        }

        return colMatch || rowMatch;
    }

    scoreBoard(board: number[][], markedBoard: number[][], lastNum: number): number {
        let sum = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (markedBoard[i][j] === 0) {
                    sum += board[i][j];
                }
            }
        }
        return sum * lastNum;
    }

    run() {
        for (let number of this.numbers) {
            for (let i = 0; i < this.boards.length; i++) {
                const score = this.updateBoard(this.boards[i], number, i);
                if (score) {
                    return score;
                }
            }
        }
    }
}