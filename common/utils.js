export function createUser(formData) {
    const user = {
        name: formData.get('name'),
        avatar: formData.get('avatar'),
        turns: 0,
        gamesWon: 0,
    };
    return user;
}


export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}