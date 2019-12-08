class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.isTrueX = true;
        this.isTrueY = true;
    }
    getX = function () {return this.x};
    getY = function () {return this.y};
    setX = function () {this.x += 1};
    setY = function () {this.y += 1};
    set_X= function () {this.x -= 1};
    set_Y= function () {this.y -= 1};
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let field = canvas.getBoundingClientRect();
let x1 = field.left;
let y1 = field.top;
let ballsArray = [];

canvas.addEventListener("click", function (e) {
    ctx.beginPath();
    ballsArray.push(new Ball(e.clientX - x1, e.clientY - y1));
    ctx.arc(e.clientX - x1 ,e.clientY - y1, 20, 0, 2 * Math.PI);
    ctx.stroke();
});

function move() {
    ctx.clearRect(0,0,500,500);
    for (let i = 0; i < ballsArray.length; i++) {
        ctx.beginPath();
        if(ballsArray[i].isTrueX === true){
            ballsArray[i].setX();
            if(field.width - ballsArray[i].getX() < ballsArray[i].radius){
                ballsArray[i].isTrueX = false;
            }
        }
        else {
            ballsArray[i].set_X();
            if(field.width - ballsArray[i].getX() > 480){
                ballsArray[i].isTrueX = true;
            }
        }

        if(ballsArray[i].isTrueY === true){
            ballsArray[i].setY();
            if(field.height - ballsArray[i].getY() < ballsArray[i].radius){
                ballsArray[i].isTrueY = false;
            }
        }
        else {
            ballsArray[i].set_Y();
            if(field.height - ballsArray[i].getY() > 480){
                ballsArray[i].isTrueY = true;
            }
        }
        ctx.arc(ballsArray[i].getX() , ballsArray[i].getY(), 20, 0, 2 * Math.PI);
        ctx.strokeStyle = 'orange';
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.stroke();
    }
}

setInterval(move, 1);













