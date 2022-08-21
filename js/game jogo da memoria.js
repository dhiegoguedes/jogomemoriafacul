const grid = document.querySelector('.grid');
const caracter = [
    '1' ,
    '2' ,
    '3' ,
    '4' ,
    '5' ,
    '6' ,
    '7' ,
    '8' ,
    '9' ,
    '10' ,
];

const createElement = (tag,  className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

}
let firstcard='';
let secondcard='';

const checkendgame =()=>{
    const disabledCards = document.querySelectorAll('.disabled-card');
if (disabledCards.length === 20) {
    alert('Parabéns, fim de jogo!');
    }
}




const checkcards = () => {
    const firstcaracter =  firstcard.getAttribute('data-caracter');
    const secondcaracter =  secondcard.getAttribute('data-caracter');

if (firstcaracter===secondcaracter){


    firstcard.firstChild.classList.add('disabled-card');
    secondcard.firstChild.classList.add('disabled-card');

    firstcard = '';
        secondcard = '';

        checkendgame();
}else {

    setTimeout(() => {

        firstcard.classList.remove('reveal-card');
        secondcard.classList.remove('reveal-card');
  
        firstcard = '';
        secondcard = '';
  
      }, 500);
    }
    
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }


    if (firstcard==''){
        target.parentNode.classList.add('reveal-card');
        firstcard = target.parentNode

    }else if (secondcard==''){

        target.parentNode.classList.add('reveal-card');
        secondcard = target.parentNode;


        checkcards();
}
   
}
 const createCard = (caracter) => {


    const card = createElement('div' , 'card');
    const front = createElement('div' , 'face front');
    const back = createElement('div' , 'face back');

    front.style.backgroundImage = `url('../imagens/${caracter}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-caracter', caracter)

    
    
    return card;
}


const loadGame = () => {

    const duplicateCaracter = [ ...caracter, ...caracter ];


    const shuffledArray = duplicateCaracter.sort(() => Math.random() - 0.5);


    duplicateCaracter.forEach((caracter) => {

        const card = createCard(caracter);
        grid.appendChild(card);

    });
}

loadGame();
