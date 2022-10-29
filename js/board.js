const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'


class Board{
    constructor(){
        this._state = [   //the current state of the board
            '_', '_','_',
            '_', '_','_',
            '_', '_','_',
            ]
        this._winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }
    markCell(position, marker){
        this._state[position] = marker;
    }
    checkWinner(marker){
        let markerArray = []
        this._state.forEach((val , index) => {
            if(val === marker){
                markerArray.push(index);
            }
        })
        // console.log(markerArray);
        return this._winConditions.some(condition => {
            return markerArray.includes(condition[0]) &&
                markerArray.includes(condition[1]) &&
                markerArray.includes(condition[2]); 

        })
    }
    resetGame(){
        this._state = [   
        '_', '_','_',
        '_', '_','_',
        '_', '_','_',
        ]
    }
}

const board = new Board();

