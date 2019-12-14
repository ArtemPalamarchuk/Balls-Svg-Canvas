function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function setRandom(){
    let random = getRandomFloat(-1, 1).toFixed(1);
    if(random === "0.0" || random === "-0.0"){
        random = "0.1";
        return random ;
    }else {
        return random;
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}