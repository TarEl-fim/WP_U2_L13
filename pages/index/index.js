/*<div class="invisi">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div> 
^^ card generation template ^^ X4*/

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

function genBoard(){
    const gameBoard = document.getElementById('gameBoard');

    for (let i=0;i<4;i++){
        const invisiDIV = document.createElement('div');
        invisiDIV.className = 'invisi';

        for (let j=0;j<5;j++){
            const randomNUM = Math.round((Math.random(0,imgChoices.length)*(imgChoices.length-1)));
            const randomIMG = imgChoices[randomNUM];
            console.log(randomIMG);


            const card = document.createElement('div');
            //card.id = `${randomIMG}`;
            card.style.backgroundImage = `url(${imgDICTInfo[randomIMG]})`;
            imgChoices.splice(imgChoices.indexOf(randomIMG), 1);

            card.className = 'card';
            invisiDIV.appendChild(card);
        }
        gameBoard.appendChild(invisiDIV);
    }
}
function flipCard(){
    console.log('kys');
}