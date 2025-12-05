class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.wins = 0;
        this.holdingCards = [];
    }

    storeData(){
        if (sessionStorage.length == 2){

        }else{
            sessionStorage.setItem(this.name,this.wins);
        }
        
        console.log(sessionStorage);
    }

    resetHoldingCards(){
        this.holdingCards[0].style.backgroundImage = null;
        this.holdingCards[1].style.backgroundImage = null;
        this.holdingCards[0].onclick = function(){pullCard(this)};
        this.holdingCards[1].onclick = function(){pullCard(this)};
        this.holdingCards = [];
    }

    flipCard(card){
        card.onclick = null;
        this.holdingCards.push(card);
    }

    checkCard(){
        const cardsDeacivated = document.querySelectorAll('.card');
        for (let i=0;i<cardsDeacivated.length;i++){
            cardsDeacivated[i].onclick = null;
        }

        if (this.holdingCards[0].id == this.holdingCards[1].id){
            this.addScore();
            setTimeout(() => {
            for (let i=0;i<cardsDeacivated.length;i++){
            cardsDeacivated[i].onclick = function(){pullCard(this)};;
            }
            }, 1000);
            let cardDeleter = this.holdingCards[0].id;
            let cardLocation = cardsLeft.indexOf(cardDeleter);
            cardsLeft.splice(cardLocation,1);

            this.holdingCards[0].onclick = null;
            this.holdingCards[1].onclick = null;
            this.holdingCards = [];
            return true;
        }else{
            setTimeout(() => {
            this.resetHoldingCards();

            for (let i=0;i<cardsDeacivated.length;i++){
            cardsDeacivated[i].onclick = function(){pullCard(this)};;
            }
            }, 1000);
            return false; 
        }
    }
    addScore(){
        this.score += 1;
    }
    addWin(){
        this.wins += 1;
    }
}

const imgDICTInfo = {
    'img1':'resources/index/general.png',
    'img2':'resources/index/leaf.png',
    'img3':'resources/index/mac&cheese.png',
    'img4':'resources/index/pumpkin.png',
    'img5':'resources/index/rolls.png',
    'img6':'resources/index/santa.png',
    'img7':'resources/index/seeds.png',
    'img8':'resources/index/tree.png',
    'img9':'resources/index/wind.png',
    'img10':'resources/index/winter.png',
}

//MAIN CODEvv


const player1 = new Player(1);
const player2 = new Player(2);
cardsLeft = ['img1','img2','img3','img4','img5','img6','img7','img8','img9','img10'];
let turn = 1;
winDisplay();


//MAIN CODE^^


function resetBoard(){
    cardsLeft = ['img1','img2','img3','img4','img5','img6','img7','img8','img9','img10'];
    turn = 1;
    genBoard();

    winDisplay();

    if (sessionStorage.length>0){
        const player1Wins = document.getElementById('1Wins');
        player1Wins.textContent = `Player 1 Wins: ${sessionStorage.getItem(1)}`;
        const player2Wins = document.getElementById('2Wins');
        player2Wins.textContent = `Player 2 Wins: ${sessionStorage.getItem(2)}`;
    }

    const turnDisplay = document.getElementById('turn');
    turnDisplay.textContent = "Player 1's turn";

    player1.score = 0;
    player2.score = 0;

    displayScores();
}

function winDisplay(){
    if (sessionStorage.length>0){
        const player1Wins = document.getElementById('1Wins');
        player1Wins.textContent = `Player 1 Wins: ${sessionStorage.getItem(1)}`;
        const player2Wins = document.getElementById('2Wins');
        player2Wins.textContent = `Player 2 Wins: ${sessionStorage.getItem(2)}`;
    }
}

function displayScores(){
    const player1Score = document.getElementById('1Score');
    const player2Score = document.getElementById('2Score');
    player1Score.textContent = `Player 1 Score: ${player1.score}`;
    player2Score.textContent = `Player 2 Score: ${player2.score}`;
}


function pullCard(card){
    card.style.backgroundImage = `url(${imgDICTInfo[card.id]})`
    if (turn % 2 == 1){
        playerNow = player1;
        next = player2;
    }else{
        playerNow = player2;
        next = player1;
    }
    playerNow.flipCard(card);
    const turnDisplay = document.getElementById('turn');
    //put card into holding -- if holding == 2 check and delete
    if (playerNow.holdingCards.length >= 2){
        let point = playerNow.checkCard();
        if (point == false){
            turn+=1;
            
            turnDisplay.textContent = `Player ${next.name}'s turn`; 
        }
    }
    displayScores()
    if (cardsLeft.length == 0){
        if (player1.score > player2.score){
            //p1 wins
            player1.addWin();
            const player1Wins = document.getElementById('1Wins');
            player1Wins.textContent = `Player 1 Wins: ${player1.wins}`;
            turnDisplay.textContent = "Player 1 Wins!";
            player1.storeData();
            player2.storeData();
        }else if(player1.score == player2.score){
            //tie
            turnDisplay.textContent = "It's a tie!";
            player1.storeData();
            player2.storeData();
        }else{
            //p2 wins
            player2.addWin();
            const player2Wins = document.getElementById('2Wins');
            player2Wins.textContent = `Player 2 Wins: ${player2.wins}`;
            turnDisplay.textContent = 'Player 2 Wins!';
            player1.storeData();
            player2.storeData();
        }
    }
}

//BOARD GENERATION vv

function genBoard(){
    const body = document.getElementsByTagName('body')[0];

    const board = document.getElementById('gameBoard');

    const turnDisplay = document.getElementById('turn');
    turnDisplay.textContent = "Player 1's turn";

    body.removeChild(board);

    const newBoard = document.createElement('div');

    newBoard.id = 'gameBoard';

    body.appendChild(newBoard);


    const reset = document.createElement('button');
    reset.id = 'reset'
    reset.textContent = 'RESET GAME';
    newBoard.appendChild(reset);
    reset.onclick = function(){resetBoard()};

    const imgChoices = [
    'img1','img1',
    'img2','img2',
    'img3','img3',
    'img4','img4',
    'img5','img5',
    'img6','img6',
    'img7','img7',
    'img8','img8',
    'img9','img9',
    'img10','img10'];

    for (let i=0;i<4;i++){
        const invisiDIV = document.createElement('div');
        invisiDIV.className = 'invisi';

        for (let j=0;j<5;j++){
            const randomNUM = Math.round((Math.random(0,imgChoices.length)*(imgChoices.length-1)));
            const randomIMG = imgChoices[randomNUM];

            const card = document.createElement('div');
            card.id = `${randomIMG}`;
            imgChoices.splice(imgChoices.indexOf(randomIMG), 1);

            card.className = 'card';
            card.onclick = function(){pullCard(this)};
            invisiDIV.appendChild(card);
        }
        newBoard.appendChild(invisiDIV);
    }
}