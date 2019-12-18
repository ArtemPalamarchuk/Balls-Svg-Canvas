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

function move() {
    ctx.clearRect(0,0,field.width,field.height);
    for (let i = 0; i < ballsArray.length; i++) {
        ctx.beginPath();

        ballsArray[i].setX();
        ballsArray[i].setY();

        if((field.width - ballsArray[i].getX() < ballsArray[i].getR()) || (ballsArray[i].getX() < ballsArray[i].getR())){
            ballsArray[i].setDx(-ballsArray[i].getDx());
        }
        if((field.width - ballsArray[i].getY() < ballsArray[i].getR()) || (ballsArray[i].getY() < ballsArray[i].getR())){
            ballsArray[i].setDy(-ballsArray[i].getDy());
        }

        ctx.arc(ballsArray[i].getX() , ballsArray[i].getY(), ballsArray[i].getR(), 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}