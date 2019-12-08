field.addEventListener("click", function (e) {
    newBall = createBall();
    newBall.dx = e.clientX - x1;
    newBall.dy = e.clientY - y1;

    ballsArray.push(newBall);
    newBall.setAttribute( 'cx', + (e.clientX - x1)  + "" );
    newBall.setAttribute('cy', + (e.clientY - y1) + "");
});