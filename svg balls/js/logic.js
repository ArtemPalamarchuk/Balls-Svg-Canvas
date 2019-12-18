function createBall(){
    if(ballsArray.length > 10){
        return;
    }
    ball = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    ball.setAttribute('r', '25');
    ball.setAttribute('style', "filter:url(#shadow);");
    ball.setAttribute('fill', "url(#gradientRed)");
    ball.setAttribute('fill', ballColors[Math.floor(Math.random() * 7)]);

    ball.dxx = setRandom();
    ball.dyy = setRandom();
    svg.appendChild(ball);

    ball.addEventListener("click", cloneBalls);

    ballsArray.push(ball);
    ballsCount++;
    return ball;
}

function cloneBalls(e) {
    e.stopPropagation()
    for (let j = 0; j < 3; j++) {
        newBall = createBall();
        newBall.dx = (e.clientX - x1/*  - randomInteger(-100, 100)|*/);
        newBall.dy = (e.clientY - y1/*  - randomInteger(-100, 100)*/);
        newBall.setAttribute( 'cx', + (e.clientX - x1)  + "" );
        newBall.setAttribute('cy', + (e.clientY - y1) + "");
    }
}

function checkCorners() {
    if(newBall.dx < 25){
        newBall.dx+=25;
    }
    if(newBall.dx > (fieldCoords.width -25)){
        newBall.dx-=25;
    }
    if(newBall.dy < 25){
        newBall.dy+=25;
    }
    if(newBall.dy > (fieldCoords.top -25)){
        newBall.dy-=25;
    }
}

function move() {

    for (let i = 0; i < ballsArray.length; i++) {
          //Test
       /* xc.innerHTML = "ballCoordX = " + (Number(ballsArray[i].getAttribute('cx')).toFixed(0));
        yc.innerHTML = "ballCoordY = " + (Number(ballsArray[i].getAttribute('cy')).toFixed(0));
        flag.innerHTML = ballsArray[i].isTrueX ? "plus" : "minus";
        way.innerHTML = ballsArray[i].way;*/

        ballsArray[i].setAttribute('cx', +(ballsArray[i].dx += Number(ballsArray[i].dxx)) + "");
        if((fieldCoords.width - ballsArray[i].getAttribute('cx') < 25) || (ballsArray[i].getAttribute('cx') < 25)){
            ballsArray[i].dxx = -ballsArray[i].dxx;
            //svg.removeChild(ballsArray[i]);
        }

        ballsArray[i].setAttribute('cy', +(ballsArray[i].dy += Number(ballsArray[i].dyy)) + "");
        if((fieldCoords.height - ballsArray[i].getAttribute('cy') < 25) || (ballsArray[i].getAttribute('cy') < 25)){
            ballsArray[i].dyy = -ballsArray[i].dyy;
            //svg.removeChild(ballsArray[i]);
        }
    }
}

setInterval(move, 1);
