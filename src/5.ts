export default class Five {
    constructor() {}

    updateGrid(pA: number[], pB: number[], grid: any[][]) {
        // do not support diagonals
        if (pA[0] !== pB[0] && pA[1] !== pB[1]) return;
    
        const direction = pA[0] - pB[0] !== 0 ? 'v' : 'h';
        let positive = true;
        
        if (direction === 'h') {
            positive = pB[0] - pA[0] > 0;
        } else {
            positive = pB[1] - pB[1] > 0;
        }
    
        if (direction === 'h') {
            if (positive) {
                for (let i = pA[0]; i <= pB[0]; i++) {
                    grid[pB[1]][i]++;
                }
            } else {
                for (let i = pB[0]; i >= pA[0]; i--) {
                    grid[pB[1]][i]++;
                } 
            }
        } else {
            if (positive) {
                for (let i = pA[1]; i < pB[1]; i++) {
                    grid[i][pB[0]]++;
                }
            } else {
                for (let i = pB[1]; i > pA[1]; i--) {
                    grid[i][pB[0]]++;
                }
            }
        }
    }
}
