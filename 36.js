/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = new Array(9),
        col = new Array(9),
        cube = [[],[],[]];
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if(row[i] === undefined || row[i].indexOf(board[i][j]) < 0) {
                    row[i] += board[i][j];
                }else {
                    return false;
                }
                if(col[j] === undefined || col[j].indexOf(board[i][j]) < 0) {
                    col[j] += board[i][j];
                }else{
                    return false;
                }
                var a = Math.floor(i/3),
                    b = Math.floor(j/3);
                if(cube[a][b] === undefined || cube[a][b].indexOf(board[i][j]) < 0) {
                    cube[a][b] += board[i][j];
                }else{
                    return false;
                }
            }
        }
    }
    return true;
};
