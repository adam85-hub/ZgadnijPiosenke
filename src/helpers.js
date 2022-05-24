export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
}

export function getRandomIntNotIn(min, max, array) {
    while (true) {
        let num = getRandomInt(min, max);
        if(array.includes(num) === false) return num;
    }
}
