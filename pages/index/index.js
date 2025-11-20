/*<div class="invisi">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div> 
^^ card generation template ^^ X4*/



function genBoard(){
    const gameBoard = document.getElementById('gameBoard');

    for (let i=0;i<4;i++){
        const invisiDIV = document.createElement('div');
        invisiDIV.className = 'invisi';
        console.log('balls')
        for (let j=0;j<5;j++){
            console.log('ballsswuared')
            const card = document.createElement('div');
            card.className = 'card';
            invisiDIV.appendChild(card);
        }
        gameBoard.appendChild(invisiDIV);
    }
}