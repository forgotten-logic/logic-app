export const USER = 'USER';
export const EIGHTDATA = 'EIGHTDATA';

export function pullFromLocStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setInLocStorage(magicKey, data) {
    localStorage.setItem(magicKey, JSON.stringify(data));
}

export function createUser(formData) {
    let user = pullFromLocStorage(USER);
    if (!formData.get('name') || !formData.get('avatar')) {
        user = {
            name: 'anonymous',
            avatar: 'booger',
            moves: 0,
            gamesWon: 0
        };

        setInLocStorage(USER, user);

    } else {

        user = {
            name: formData.get('name'),
            avatar: formData.get('avatar'),
            moves: 0,
            gamesWon: 0,
        };
        setInLocStorage(USER, user);
    }
}

export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}
function findByName(array, name) {
    for (let item of array) {
        if (item.name === name) return item.avatar;
    }
}

export function loadUserProfile() {
    const name = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');
    const moves = document.getElementById('user-moves');
    const solves = document.getElementById('user-solves');
    const user = pullFromLocStorage(USER);

    name.textContent = user.name;
    avatar.src = findByName(avatars, user.avatar);
    moves.textContent = user.moves;
    solves.textContent = user.gamesWon;
}


const avatars = [
    {
        id: 'alan-turing',
        name: 'Alan Turing',
        avatar: '../assets/avatars/Alan_Turing.jpg',
    },
    {
        id: 'ada-lovelace',
        name: 'Ada Lovelace',
        avatar: '../assets/avatars/ada-lovelace.jpeg',
    },
    {
        id: 'margaret-hamilton',
        name: 'Margaret Hamilton',
        avatar: '../assets/avatars/Margaret_Hamilton.gif'
    },
    {
        id: 'albert-einstein',
        name: 'Albert Einstein',
        avatar: '../assets/avatars/Albert-Einstein.jpg',
    }
];
