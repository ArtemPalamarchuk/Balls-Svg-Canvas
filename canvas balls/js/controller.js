canvas.addEventListener("click", function (e) {
    let x = e.offsetX;
    let y = e.offsetY;

    for (let i = 0; i < ballsArray.length; i++) {
        if((Math.pow(x - ballsArray[i].getX(),2) + Math.pow(y -ballsArray[i].getY(),2)) <= Math.pow(ballsArray[i].getR(), 2)){
            for (let j = 0; j < 3; j++) {
                ctx.beginPath();
                ballsArray.push(new Ball(e.offsetX, e.offsetY));
                ctx.arc(e.offsetX ,e.offsetY, ballsArray[i].getR(), 0, 2 * Math.PI);
                ctx.stroke();
            }
            return;
        }
    }

    ctx.beginPath();
    ballsArray.push(new Ball(e.offsetX, e.offsetY));
    ctx.arc(e.offsetX ,e.offsetY, 20, 0, 2 * Math.PI);
    ctx.strokeStyle = 'orange';
    ctx.fillStyle = 'orange';
    ctx.stroke();
});

setInterval(move, 5);













