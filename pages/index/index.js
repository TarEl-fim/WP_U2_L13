/*<div class="invisi">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div> 
^^ card generation template ^^ X4*/

const imgDiction = {
    'img1':[2,'../../resources/index/general.png','Jackolanterns'],
    'img2':[2,'../../resources/index/leaf.png','FallLeaf'],
    'img3':[2,'../../resources/index/mac&cheese.png','MacandCheese'],
    'img4':[2,'../../resources/index/pumpkin.png','Pumpkins'],
    'img5':[2,'../../resources/index/rolls.png','BreadRolls'],
    'img6':[2,'../../resources/index/santa.png','SantaMeme'],
    'img7':[2,'../../resources/index/seeds.png','PumpkinSeeds'],
    'img8':[2,'../../resources/index/tree.png','FunnyTreeImage'],
    'img9':[2,'../../resources/index/wind.png','LeavesBlownAway'],
    'img10':[2,'../../resources/index/winter.png','WinterLeaves'],
}

const imgChoices = [
    'img1','img2','img3','img4','img5','img6','img7','img8','img9','img10'];

function genBoard(){
    const gameBoard = document.getElementById('gameBoard');

    for (let i=0;i<4;i++){
        const invisiDIV = document.createElement('div');
        invisiDIV.className = 'invisi';

        for (let j=0;j<5;j++){
            const randomNUM = Math.round((Math.random(0,imgChoices.length)*10));
            const randomIMG = imgChoices[randomNUM];
            console.log(randomIMG);
            console.log(imgDiction.get(randomIMG)[0]);

            //while(imgDiction[randomIMG][0] == 0){
              //  const randomNUM = Math.round((Math.random(0,imgChoices.length)*10));
             //   const randomIMG = imgChoices[randomNUM];
            //}

            const card = document.createElement('div');
            card.innerHTML = `<img=src${imgDiction[randomIMG][1]} alt=${imgDiction[randomIMG][2]}</img>`;
            imgDiction[randomIMG][0] -= 1;
            card.className = 'card';
            invisiDIV.appendChild(card);
        }
        gameBoard.appendChild(invisiDIV);
    }
}