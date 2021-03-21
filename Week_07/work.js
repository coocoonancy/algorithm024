// [有效的数独（亚马逊、苹果、微软在半年内面试中考过）](https://leetcode-cn.com/problems/valid-sudoku/description/)
var isValidSudoku = function(board) {
    const row = {};
    const col = {};
    const square = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const num = board[i][j];
            if(num !== '.') {
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[i + '.' + num] || col[j + '.' + num] || square[k + '.' + num]) return false;
                row[i + '.' + num] = true;
                col[j + '.' + num] = true;
                square[k + '.' + num] = true;
            }

        }
    }
    return true;
};
// [解数独（亚马逊、华为、微软在半年内面试中考过）](https://leetcode-cn.com/problems/sudoku-solver/submissions/)
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let isValid = (i, j, num) => {
        for (let n = 0; n < board.length; n++) {
            let br = parseInt(i / 3) * 3;
            let bc = parseInt(j / 3) * 3;
            if (board[i][n] == num || board[n][j] == num || board[br + parseInt(n / 3)][bc + (n % 3)] == num) return false;
        }
        return true;
    }
    let solve = (board) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === '.') {
                    for (let k = 1; k < board.length + 1; k++) {
                        if (isValid(i, j, k)) {
                          board[i][j] = k + '';
                          if (solve(board)) return true;
                          board[i][j] = '.';
                        } 
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board);
    return board;
};
//   [单词接龙（亚马逊、Facebook、谷歌在半年内面试中考过）](https://leetcode-cn.com/problems/word-ladder/submissions/)
  /**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    let front = new Set().add(beginWord);
    let back = new Set().add(endWord);
    let level = 1;
    while(front.size > 0) {
        let next = new Set();
        for (let f of front) {
            for (let n = 0; n < f.length; n++) {
                const k = f[n];
                for (let i = 0; i < 26; i++) {
                    let s = String.fromCharCode(97 + i);
                    if (s !== k) {
                        let newWord = f.slice(0, n) + s + f.slice(n + 1);
                        if (back.has(newWord)) return level + 1;
                        if (wordSet.has(newWord)) {
                            next.add(newWord);
                            wordSet.delete(newWord);
                        } 
                    }
                }
            }
        }
        front = next;
        level++;
        if (front.size > back.size) {
            [front, back] = [back, front];
        } 
    }
    return 0;
};