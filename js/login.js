const input = document.querySelector('.logininput');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled' , '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('carregando...');

    localStorage.setItem('player' , input.value);

    window.location = 'pages/game.html';
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);