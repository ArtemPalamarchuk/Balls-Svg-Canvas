
let field = document.getElementById('field');

let fieldCoords = field.getBoundingClientRect();
let x1 = fieldCoords.left;
let y1 = fieldCoords.top;

let svg = document.getElementById('svg');

let ballsArray = [];
let ball;
let newBall;
let ballColors = ["url(#gradientRed)", "url(#gradientOrange)", "url(#gradientYellow)", "url(#gradientGreen)", "url(#gradientBlue)", "url(#gradientDarkBlue)", "url(#gradientViolet)"];

