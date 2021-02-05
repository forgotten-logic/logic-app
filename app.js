import { createUser } from './common/utils.js';

const form = document.getElementById('newUser');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    createUser(formData);
    window.location = './puzzles/index.html';
});