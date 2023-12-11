var elapsedSeconds = 0;
function UpdateClock() {
    elapsedSeconds++;

    var minutes = Math.floor(elapsedSeconds / 60);
    var seconds = elapsedSeconds % 60;

    document.getElementById('timer').textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function ResetClock(){
    elapsedSeconds = 0;
}