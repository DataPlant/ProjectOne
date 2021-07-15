let currentPlayer = 'X';
let currentScore = ['','','','','','','','',''];
let winSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let compareX = ["X","X","X"]
let compareO = ["O","O","O"]
player();

function player(){
    for(let i=0; i<9; i++){
        let bClick = document.querySelector('#a'+i);
        bClick.addEventListener('click', function(event){
            bClick.append(currentPlayer);
            let mark = document.querySelector('#a'+i).innerText
            currentScore.splice(i,1, mark)
            for(let i=0; i<8; i++){
                let score = winSets[i];
                let check = [];
                for(let i=0; i<3; i++){
                    check.push(currentScore[score[i]])
                }
                console.log(check) //Sanity Check
                resultCheck(currentPlayer, check)
            }
            switchPlayer(currentPlayer);
        })
    }
}
function switchPlayer(player){
    if(player === 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
    }
}
function resultCheck(player, check){
    if(player === 'X'){
        let result = 0;
        for(let i=0; i<3; i++){
            if(check[i] === compareX[i]){
                result++;
            }
            if(result === 3){
                let final = document.querySelector('h3');
                final.append('Player X WINSSSS');
            }
        }
    }
    if(player === 'O'){
        let result = 0;
        for(let i=0; i<3; i++){
            if(check[i] === compareO[i]){
                result++;
            }
            if(result === 3){
                let final = document.querySelector('h3');
                final.append('Player O WINSSSS');
            }
        }
    }
}