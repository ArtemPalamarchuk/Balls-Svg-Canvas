field.addEventListener("click", function (e) {
    e.stopPropagation()

    newBall = createBall();

    newBall.dx = e.clientX - x1;
    newBall.dy = e.clientY - y1;
    checkCorners();

    newBall.setAttribute( 'cx',  String(e.clientX - x1));
    newBall.setAttribute('cy', String(e.clientY - y1));
});




