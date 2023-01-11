const bt1 = document.querySelector('.bt1');
const bt2 = document.querySelector('.bt2');
const bt3 = document.querySelector('.bt3');
const bt4 = document.querySelector('.bt4');
const bt5 = document.querySelector('.bt5');
const bt6 = document.querySelector('.bt6');
const bt7 = document.querySelector('.bt7');
const bt8 = document.querySelector('.bt8');
const bt9 = document.querySelector('.bt9');

const turns = document.querySelector('.turn');

const winner = document.querySelector('.results');

const disp_score = document.querySelector('.scores');

const play_again = document.querySelector('.playagain');

let scores = [0,0];
let curMove = "A";
let moves = [];
let game = [["", "", ""], ["", "", ""], ["", "", ""]];
let win = false;

bt1.addEventListener('click', () => {
    //console.log('button 1 is clicked');
    //bt1.innerHTML = `X`;
    if(curMove == "A" && moves.includes("bt1") == false && win == false){
        bt1.innerHTML = `X`;
        moves.push("bt1");
        game[0][0] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt1") == false && win == false){
        bt1.innerHTML = 'O';
        moves.push("bt1");
        game[0][0] = "O";
        let res = checkWinner();
        //console.log(res);
        //console.log(game)
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);
});

bt2.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt2") == false && win == false){
        bt2.innerHTML = `X`;
        moves.push("bt2");
        game[0][1] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt2") == false && win == false){
        bt2.innerHTML = 'O';
        moves.push("bt2");
        game[0][1] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);

});

bt3.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt3") == false && win == false){
        bt3.innerHTML = `X`;
        moves.push("bt3");
        game[0][2] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt3") == false && win == false){
        bt3.innerHTML = 'O';
        moves.push("bt3");
        game[0][2] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);

});

bt4.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt4") == false && win == false){
        bt4.innerHTML = `X`;
        moves.push("bt4");
        game[1][0] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt4") == false && win == false){
        bt4.innerHTML = 'O';
        moves.push("bt4");
        game[1][0] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);

});

bt5.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt5") == false && win == false){
        bt5.innerHTML = `X`;
        moves.push("bt5");
        game[1][1] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt5") == false && win == false){
        bt5.innerHTML = 'O';
        moves.push("bt5");
        game[1][1] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    //console.log(moves);
    //console.log(game);
    //console.log(curMove);
    displayTurn(curMove);

});

bt6.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt6") == false && win == false){
        bt6.innerHTML = `X`;
        moves.push("bt6");
        game[1][2] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt6") == false && win == false){
        bt6.innerHTML = 'O';
        moves.push("bt6");
        game[1][2] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);

});

bt7.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt7") == false && win == false){
        bt7.innerHTML = `X`;
        moves.push("bt7");
        game[2][0] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt7") == false && win == false){
        bt7.innerHTML = 'O';
        moves.push("bt7");
        game[2][0] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);


});

bt8.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt8") == false && win == false){
        bt8.innerHTML = `X`;
        moves.push("bt8");
        game[2][1] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt8") == false && win == false){
        bt8.innerHTML = 'O';
        moves.push("bt8");
        game[2][1] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    displayTurn(curMove);

});

bt9.addEventListener('click', () => {
    if(curMove == "A" && moves.includes("bt9") == false && win == false){
        bt9.innerHTML = `X`;
        moves.push("bt9");
        game[2][2] = "X";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'B';
    }
    else if(curMove == "B" && moves.includes("bt9") == false && win == false){
        bt9.innerHTML = 'O';
        moves.push("bt9");
        game[2][2] = "O";
        let res = checkWinner();
        if(res == true){
            displayWinner(curMove);
            updateScores(curMove);
        }
        curMove = 'A';
    }
    //console.log(game);
    displayTurn(curMove);

});

play_again.addEventListener('click', ()=> {
    bt1.innerHTML = ``;
    bt2.innerHTML = ``;
    bt3.innerHTML = ``;
    bt4.innerHTML = ``;
    bt5.innerHTML = ``;
    bt6.innerHTML = ``;
    bt7.innerHTML = ``;
    bt8.innerHTML = ``;
    bt9.innerHTML = ``;
    winner.innerHTML = `<p></p>`;
    turns.innerHTML = `<p>Player A Turn</p>`;
    curMove = "A";
    moves = [];
    game = [["", "", ""], ["", "", ""], ["", "", ""]];
    win = false;
});

function displayTurn(turn_now) {
    if(win == false){
        turns.innerHTML = `<p>Player ${turn_now} Turn</p>`;
    }
};

function displayWinner(cur_win) {
    winner.innerHTML = `Player ${cur_win} Wins!`;
    win = true;
}

function updateScores(cur_win) {
    if(cur_win == "A"){
        scores[0] += 1;
    }
    if(cur_win == "B"){
        scores[1] += 1;
    }
    disp_score.innerHTML = `<p>Player A Score: ${scores[0]}</p><p>Player B Score: ${scores[1]}</p>`;
}

function checkWinner(){
    return checkdiagonal() || checkHorizontal() || checkVertical();
}

function checkdiagonal() {
    if(game[0][0] == "X" && game[1][1] == "X" && game[2][2] == "X"){
        return true;
    }
    if(game[0][0] == "O" && game[1][1] == "O" && game[2][2] == "O"){
        return true;
    }
    if(game[2][0] == "X" && game[1][1] == "X" && game[0][2] == "X"){
        return true;
    }
    if(game[2][0] == "O" && game[1][1] == "O" && game[0][2] == "O"){
        return true;
    }
}

function checkHorizontal() {
    if(game[0][0] == "X" && game[0][1] == "X" && game[0][2] == "X"){
        return true;
    }
    if(game[0][0] == "O" && game[0][1] == "O" && game[0][2] == "O"){
        return true;
    }
    if(game[1][0] == "X" && game[1][1] == "X" && game[1][2] == "X"){
        return true;
    }
    if(game[1][0] == "O" && game[1][1] == "O" && game[1][2] == "O"){
        return true;
    }
    if(game[2][0] == "X" && game[2][1] == "X" && game[2][2] == "X"){
        return true;
    }
    if(game[2][0] == "O" && game[2][1] == "O" && game[2][2] == "O"){
        return true;
    }
}

function checkVertical() {
    if(game[0][0] == "X" && game[1][0] == "X" && game[2][0] == "X"){
        return true;
    }
    if(game[0][0] == "O" && game[1][0] == "O" && game[2][0] == "O"){
        return true;
    }
    if(game[0][1] == "X" && game[1][1] == "X" && game[2][1] == "X"){
        return true;
    }
    if(game[0][1] == "O" && game[1][1] == "O" && game[2][1] == "O"){
        return true;
    }
    if(game[0][2] == "X" && game[1][2] == "X" && game[2][2] == "X"){
        return true;
    }
    if(game[0][2] == "O" && game[1][2] == "O" && game[2][2] == "O"){
        return true;
    }
}