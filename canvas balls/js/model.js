class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = setRandom();
        this.dy = setRandom();
        this.radius = 20;
        //this.color = colorsArray[Math.floor(Math.random() * 7)];
    }

    getX = function () {return this.x};
    getY = function () {return this.y};
    getDx = function () {return this.dx};
    getDy = function () {return this.dy};

    setX = function () {this.x += Number(this.dx)};
    setY = function () {this.y += Number(this.dy)};
    setDx = function (dx) {this.dx = dx};
    setDy = function (dy) {this.dy = dy};

    getR = function () {return this.radius};
    //getColor = function () {return this.color};
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let field = canvas.getBoundingClientRect();
let ballsArray = [];
//let colorsArray = ['red','orange','yellow','green','cornflowerblue','darkBlue','violet'];