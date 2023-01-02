let scorePointsGuest = document.getElementById('points-score-guest');
let scorePoints = document.getElementById('points-score');

let score = 0;


function addOne() {
    score = score + 1;
   scorePoints.innerHTML = score;
}

function addTwo() {
    score = score + 2;
   scorePoints.innerHTML = score;
}

function addThree() {
    score = score + 3;
   scorePoints.innerHTML = score;
}

// Guest
function addOneGuest() {
    score = score + 1;
    scorePointsGuest.innerHTML = score;
}

function addTwoGuest() {
    score = score + 2;
   scorePointsGuest.innerHTML = score;
}

function addThreeGuest() {
    score = score + 3;
   scorePointsGuest.innerHTML = score;
}


let resetScore = document.getElementById('reset');
resetScore.reset();