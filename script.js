var fly=document.getElementById("fly");
var cubic=document.getElementById("cube");
var postext=document.getElementById("pos")
cubic.style.left = 300 + "px";
cubic.style.top = 300 + "px";

postext.style.bottom = 50 +"px";
var time =200
var posionmouseX,posionmouseY

var currentpositionX
var currentpositionY
var alpha
var distX, distY;

// move X
function moveX(a){
    var timermoveX = setInterval(function() {
    if (posionmouseX>=currentpositionX && a < posionmouseX-currentpositionX){
        cubic.style.left = currentpositionX + a + "px";
        currentpositionX=cubic.offsetLeft
        a+=2
    } 
    },time)
}
function moveXback(b){
    var timermovebX = setInterval(function() {
     if (posionmouseX<=currentpositionX && b < currentpositionX-posionmouseX) {
        cubic.style.left = currentpositionX - b + "px";  
        currentpositionX=cubic.offsetLeft
        b+=2
    }
    },time)
}
// move Y
function moveY(a){
    var timermoveY = setInterval(function() {
    if (posionmouseY>=currentpositionY && a < posionmouseY-currentpositionY){
        cubic.style.top = currentpositionY + a + "px";
        currentpositionY=cubic.offsetTop
        a+=2
    } 
    },time)
}
function moveYback(b){
    var timermovebY = setInterval(function() {
     if (posionmouseY<=currentpositionY && b < currentpositionY-posionmouseY) {
        cubic.style.top = currentpositionY - b + "px";  
        currentpositionY=cubic.offsetTop
        b+=2
    }
    },time)
}

document.onmousedown = function(event) {
    posionmouseX=event.clientX
    posionmouseY=event.clientY
    var a=0,b=0,c=0,d=0
    var quadrant;
    currentpositionX=cubic.offsetLeft
    currentpositionY=cubic.offsetTop
    distX = posionmouseX-currentpositionX
    distY = posionmouseY-currentpositionY
    alpha = Math.atan(Math.abs(distY/distX)) * 57.3
    postext.innerHTML = currentpositionX + " " +currentpositionY


    if (distX>0) {
        if (distY>0) {
            quadrant=4
            moveX(a)
            moveY(c)
            fly.style.transform = `rotate(${90+alpha}deg)`;
        } else {
            quadrant=1
            moveX(a)
            moveYback(d)
            fly.style.transform = `rotate(${90-alpha}deg)`;
        }
    } else {
        if (distY>0) {
            quadrant=3
            moveXback(b)
            moveY(c)
            fly.style.transform = `rotate(${270-alpha}deg)`;

        } else {
            quadrant=2
            moveXback(b)
            moveYback(d)
            fly.style.transform = `rotate(${270+alpha}deg)`;
        }
    }
    clearInterval(timermovebX)
    clearInterval(timermoveX)
    clearInterval(timermovebY)
    clearInterval(timermoveY)
}