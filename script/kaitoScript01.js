// JavaScript source code

//fncalert01‚Ì•Ï”
var turnCount = 0;
//fncalert02•Ï”
var turnCount02 = 0;
var beforeNumber = 0;
var afterNumber = 0;

function aaa(t) {
    alert(t);
}

function fncalert(number) {
    if (number % 2 == 0) {
        alert('‹ô”');
    } else {
        alert('Šï”');
    }
}

function fncalert01(number) {
    turnCount++;
    if (turnCount % 2 == 0) {
        alert(turnCount);
    }
}

function fncalert02(number,id) {
    turnCount02++;
    document.getElementById(id).disabled = true;
    
    if (turnCount02 % 2 == 1) {
        beforeNumber = number;
    } else {
        afterNumber = number;
        if (beforeNumber == afterNumber) {
            alert('Just do it!');
        } else {
            alert('See you later.');
        }
    }
}