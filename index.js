let currentPlayer = "";
let playerX = document.getElementById('playerX');
let resetGame = document.getElementById('Resetgame');
let gamBox = document.getElementById('gamebox');
let playerO =document.getElementById('playerO');
let winner = document.getElementById('Winner');
let winImg = document.querySelector('.win-image');
let turn = document.getElementById('turn');
let playertue = document.getElementById('PlyareTurn');

function selectPlayer(player) {

    if (currentPlayer === "") {
        playerO.classList.add('d-none');
        resetGame.classList.add('d-block');
        gamBox.classList.add('d-flex');
        currentPlayer = player;
        turn.classList.add('d-block')
        playertue.innerHTML = currentPlayer;
    } else {
        currentPlayer = player;
    }
}

/* function selectPlayerO() {
    // event.target.innerHTML = currentPlayer;
    if (currentPlayer === "") {
        playerX.classList.add('d-none');
        resetGame.classList.add('d-block');
        gamBox.classList.add('d-flex');
        currentPlayer = "O";
        turn.classList.add('d-block')
        playertue.innerHTML = currentPlayer;
    } else {
        currentPlayer = "X";
    }
} */

function playerTurn(event, index, subIndex) {

    event.target.innerHTML = currentPlayer;
    event.target.style.pointerEvents = "none";

    if (currentPlayer === "X") {

        currentPlayer = "O";
        document.getElementById('PlyareTurn').innerHTML = currentPlayer;
        //storplayerval = document.getElementById(event);
    } else {
        currentPlayer = "X"
        document.getElementById('PlyareTurn').innerHTML = currentPlayer;
    }


    const box1 = document.getElementById('box-1').innerHTML;
    const box2 = document.getElementById('box-2').innerHTML;
    const box3 = document.getElementById('box-3').innerHTML;
    const box4 = document.getElementById('box-4').innerHTML;
    const box5 = document.getElementById('box-5').innerHTML;
    const box6 = document.getElementById('box-6').innerHTML;
    const box7 = document.getElementById('box-7').innerHTML;
    const box8 = document.getElementById('box-8').innerHTML;
    const box9 = document.getElementById('box-9').innerHTML;
   
    if ((box1 === box2 && box2 === box3) && (box1 === 'X' || box1 === 'O')) {
        afterMatchWin(box1);
    } else if ((box4 === box5 && box5 === box6) && (box4 === 'X' || box4 === 'O')) {
        afterMatchWin(box4);
    } else if ((box7 === box8 && box8 === box9) && (box7 === 'X' || box7 === 'O')) {
        afterMatchWin(box7);
    } else if ((box1 === box4 && box4 === box7) && (box7 === 'X' || box7 === 'O')) {
        afterMatchWin(box7);
    } else if ((box2 === box5 && box5 === box8) && (box2 === 'X' || box2 === 'O')) {
        afterMatchWin(box2);
    } else if ((box3 === box6 && box6 === box9) && (box3 === 'X' || box3 === 'O')) {
        afterMatchWin(box3);
    } else if ((box3 === box5 && box5 === box7) && (box5 === 'X' || box5 === 'O')) {
        afterMatchWin(box5);
    } else if ((box1 === box5 && box5 === box9) && (box9 === 'X' || box9 === 'O')) {
        afterMatchWin(box9);
    } else {
        console.log('game draw');
    }
}

function resetBoard(event) {
    let box = document.querySelectorAll('.box');
    box.forEach(ele => {
        ele.innerHTML = "";
        resetGame.classList.add('d-none');
        resetGame.classList.remove('d-block');
        playerX.classList.add('d-block');
        playerO.classList.add('d-block');
        winner.classList.add('d-none');
        winner.classList.remove('d-block');
        winImg.classList.add('d-none');
        winImg.classList.remove('d-block');
        turn.classList.add('d-none');
        turn.classList.remove('d-block');
        ele.style.pointerEvents = "auto"
    })
}

function getPlayerData(event, index, subIndex, currentPlayer) {
    /*  let newval = event.target.id;
     //console.log(newval,'newval');
     boxes.forEach(box => {
         let nedata = box.innerHTML; */

    // console.log(nedata,'data');
    // console.log(index1.innerHTML,'index1valuuuu'); 

    //});
    // console.log(newval,"get id value");
    //  winGame[index][subIndex] = newval;
    // console.log(winGame[0],'length');
    /*  let firstRow = [winGame[0][0],winGame[0][1],winGame[0][2]];
     let secondRow = [winGame[1][0],winGame[1][1],winGame[1][2]];
     let thirdRow = [winGame[2][0],winGame[2][1],winGame[2][2]];
     let firstcol = [winGame[0][0],winGame[1][0],winGame[2][0]];
     let secondcol = [winGame[1][0],winGame[1][1],winGame[1][2]];
     let thirdcol = [winGame[2][0],winGame[2][1],winGame[2][2]];
     let leftcross = [winGame[0][0],winGame[1][1],winGame[2][2]];
     let rightcross = [winGame[0][2],winGame[1][1],winGame[2][0]]; */
    // let firstRow = winGame[0];
    /* console.log(winGame[winningConditions[0][0]],'array 0 index');
    console.log(winGame[winningConditions[0][1]],'array 1 index');
    console.log(winGame[winningConditions[0][2]],'array 2 index'); */
    // console.log(winGame,'wingame');
    //console.log(rightcross,'colum');

    //console.log("index :",index);
    // console.log("subIndex :",subIndex);

    // let storeplayerval = event.target;
    //console.log(storeplayerval);
    /* console.log("firstRow :",firstRow);
    if (firstRow[0] === firstRow[1] && firstRow[1] === firstRow[2]) {
        console.log("THE winner is:" ,firstRow[0]);
        document.getElementById('Winner').style.display = "block";
        document.getElementById('turn').style.display = "none";
        document.querySelector('.win-image').style.display = "block"
        //event.target.style.pointerEvents = "none";
        document.getElementById('Winner').innerHTML = `${firstRow[0]} is Winner`
    } else if(secondRow[0] === secondRow[1] && secondRow[1] === secondRow[2]){
        document.getElementById('Winner').style.display = "block";
        document.getElementById('turn').style.display = "none";
        document.querySelector('.win-image').style.display = "block"
        console.log("THE winner is:" ,secondRow[0]);
    } else if(thirdRow[0] === thirdRow[1] && thirdRow[1] === thirdRow[2]){
        console.log("THE winner is:" ,thirdRow[0]);
    }  else if(firstcol[0] === firstcol[1] && firstcol[1] === firstcol[2]){
        console.log("THE winner is:" ,firstcol[0]);
    } else if(secondcol[0] === secondcol[1] && secondcol[1] === secondcol[2]){
        console.log("THE winner is:" ,secondcol[0]);
    } else if(thirdcol[0] === thirdcol[1] && thirdcol[1] === thirdcol[2]){
        console.log("THE winner is:" ,thirdcol[0]);
    } else if(leftcross[0] === leftcross[1] && leftcross[1] === leftcross[2]){
        console.log("THE winner is:" ,leftcross[0]);
    } else if(rightcross[0] === rightcross[1] && rightcross[1] === rightcross[2]){
        console.log("THE winner is:" ,rightcross[0]);
    } else {
        document

    } */

}

function afterMatchWin(winsign) {
    winner.classList.add('d-block');
    turn.classList.add('d-none');
   winner.innerHTML = `${winsign} is winner`
    winImg.classList.add('d-block');

    let playerWin = winner.innerHTML;
    if (playerWin != "") {
        for (let i = 1; i < 10; i++) {
            console.log(document.getElementById(`box-${i}`));
            console.log("innerhtml :", document.getElementById(`box-${i}`).innerHTML);
            if (document.getElementById(`box-${i}`).innerHTML === "") {
                console.log("");
                document.getElementById(`box-${i}`).style.pointerEvents = "none";
            }
        }
    }

}