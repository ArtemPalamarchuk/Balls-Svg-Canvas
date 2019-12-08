function createBall(){
    ball = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    ball.setAttribute('r', '25');
    ball.setAttribute('style', "filter:url(#shadow);");
    ball.setAttribute('fill', "url(#gradientRed)");
    ball.setAttribute('fill', ballColors[Math.floor(Math.random() * 7)]);

    ball.dx = null;
    ball.dy = null;
    ball.isTrueX = true;
    ball.isTrueY = true;

    svg.appendChild(ball);
    return ball;
}


function move() {
    for (let i = 0; i < ballsArray.length; i++) {
        if(ballsArray[i].isTrueX === true){
            ballsArray[i].setAttribute('cx', + (ballsArray[i].dx++) + "" );
            if(fieldCoords.width - ballsArray[i].getAttribute('cx') < 25){
                ballsArray[i].isTrueX = false;
            }
        }
        else {
            ballsArray[i].setAttribute('cx', + ballsArray[i].dx-- + "" );
            if(fieldCoords.width - ballsArray[i].getAttribute('cx') > fieldCoords.right - fieldCoords.left - 25){
                ballsArray[i].isTrueX = true;
            }
        }
        if(ballsArray[i].isTrueY === true){
            ballsArray[i].setAttribute('cy', + ballsArray[i].dy++ + "" );
            if(fieldCoords.height - ballsArray[i].getAttribute('cy') < 25){
                ballsArray[i].isTrueY = false;
            }
        }
        else {
            ballsArray[i].setAttribute('cy', + ballsArray[i].dy-- + "" );
            if(fieldCoords.height - ballsArray[i].getAttribute('cy') > fieldCoords.bottom - fieldCoords.top - 25){
                ballsArray[i].isTrueY = true;
            }
        }
    }
}
setInterval(move, 1);



/*
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function addListenerCloneToBall() {
    for (let i = ballsCount; i < ballsArray.length; i++) {
        ballsArray[i].addEventListener("click", function (e) {
            e.stopPropagation();

            xCoord = e.clientX;
            yCoord = e.clientY;

            for (let j = 0; j < 3; j++) {
                newBall = createBall();
                newBall.setAttribute( 'cx', + (xCoord - xLeft - randomInteger(-80, 80))  + "" );
                newBall.setAttribute('cy', + (yCoord - yTop - randomInteger(-80, 80)) + "");
            }

        });
    }
}
*/
