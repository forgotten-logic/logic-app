import { createUser } from './common/utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const user = createUser(formData);

    const userStringified = JSON.stringify(user);
    localStorage.setItem('USER', userStringified);

    window.location = '../index.html';
});
