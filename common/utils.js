const USER = 'USER';

export function pullFromLocStorage(key) {
    
    return JSON.parse(localStorage.getItem(key));

}


export function createUser(formData) {
    let user = pullFromLocStorage(USER);
    if (!formData.get('name') || !formData.get('avatar')) {
        user = {
            name: 'anonymous', 
            avatar: '',
            moves: 0,
            wins: 0
        };
        
        localStorage.setItem(USER, JSON.stringify(user));
        
    } else {
        
        user = {
            name: formData.get('name'),
            avatar: formData.get('avatar'),
            turns: 0,
            gamesWon: 0,
        };
        localStorage.setItem(USER, JSON.stringify(user));
    }
}


export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}