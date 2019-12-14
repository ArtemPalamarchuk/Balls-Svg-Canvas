let field = document.getElementById('field');

let fieldCoords = field.getBoundingClientRect();
let x1 = fieldCoords.left;
let y1 = fieldCoords.top;

let svg = document.getElementById('svg');

let ball;
let newBall;
let ballsCount = 0;
let ballsArray = [];
let ballColors = ["url(#gradientRed)", "url(#gradientOrange)", "url(#gradientYellow)", "url(#gradientGreen)", "url(#gradientBlue)", "url(#gradientDarkBlue)", "url(#gradientViolet)"];

//Test
/*let xc = document.getElementById('x1');
let yc = document.getElementById('y1');
let fieldWidthh = document.getElementById('fieldWidth');
let fieldHeightt = document.getElementById('fieldHeight');
fieldWidthh.innerHTML ="Field width = " + fieldCoords.width;
fieldHeightt.innerHTML ="Field height = " +  fieldCoords.height.toFixed(0);
let flag = document.getElementById('flag');
let way = document.getElementById('way');*/

