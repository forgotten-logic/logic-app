export const USER = 'USER';
export const EIGHTDATA = 'EIGHTDATA';

export function pullFromLocStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setInLocStorage(magicKey, key2) {
    localStorage.setItem(magicKey, JSON.stringify(key2));
}

export function clearLocStorage() {
    localStorage.clear();
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