class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.wins = 0;
        this.holdingCards = [];
    }

    storeData(){
        sessionStorage.setItem(this.name,[this.score,this.wins]);
    }

    flipCard(card){
        this.holdingCards.append(card);
    }
    checkCard(){
        if (this.holdingCards[0] = this.holdingCards[1]){
            this.addScore();
            this.holdingCards = [];
            return true;
        }else{
            this.holdingCards = [];
            return false;
        }
    }
    addScore(){
        this.score +=10;
    }
    addWin(){
        this.wins +=1;
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
let turn = 0;


//MAIN CODE^^


function resetBoard(){
    cardsLeft = ['img1','img2','img3','img4','img5','img6','img7','img8','img9','img10'];
    turn = 0;
    genBoard();
    player1.score = 0;
    player2.score = 0;
}


function pullCard(card){
    card.style.backgroundImage = `url(${imgDICTInfo[card.id]})`
    if (turn % 2 == 1){
        playerNow = player1;
    }else{
        playerNow = player2;
    }
    playerNow.holdingCards.append(card.id);
    //put card into holding -- if holding == 2 check and delete
    if (playerNow.holdingCards == 2){
        let point = playerNow.checkCard;
    }
}

function genBoard(){
    const body = document.getElementsByTagName('body')[0];

    const board = document.getElementById('gameBoard');

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