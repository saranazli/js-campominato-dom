
const bigSq = document.querySelector('.big_square');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');

let bombs = [];
const maxBombs = 16;

let score = 0;


btnStart.addEventListener('click', function(){

  for( let i = 1; i <= 100; i++){
    const insertSq = functionInsertSq (i);
    bigSq.append(insertSq);
  };

  
});

btnReset.addEventListener('click', function(){
  reset ();
});

//FUNCTION


// funzione per fare comparire i quadratini colorati e il numero
function functionInsertSq (numero){

  const sq = document.createElement('div');
  sq.className = 'small_square';

  
  sq.addEventListener('click', function(){
    
    this.innerHTML = numero;
    this.classList.add('choosed');

    bombs = createBomb();

    if(bombs.includes(numero)){

      endGame (' hai perso ');
      this.classList.add('.bomb');

    } else {

      this.innerHTML = numero;
      this.classList.add('choosed');
      score++;
      if(score === 100 - maxBombs){
        endGame ('hai vinto');
      };
    };
    
  });

  return sq;
};

function createBomb(){

  const bombsCase = [];

  while (bombsCase.length < maxBombs){

    const singleBomb = Math.ceil(Math.random() * 100);

    if (!bombsCase.includes(singleBomb)) bombsCase.push(singleBomb);

  };

  return bombsCase;

};

function endGame(winLose){
  console.log(winLose);
};

function reset (){
  bigSq.innerHTML= ' ';
};