var minutes_html = document.getElementById("minutes");
var seconds_html = document.getElementById("seconds");
var miliSeconds_html = document.getElementById("miliSeconds");
var start_button = document.getElementById("start_button");

var minutes = 0;
var seconds = 0;
var miliSeconds = 0;

var watchInterval;

function start() {
    watchInterval = setInterval(function(){
        miliSeconds++;
        if (miliSeconds >= 99){
            seconds++;
            miliSeconds = 0;
        }
        if (seconds >= 59){
            minutes++;
            seconds = 0;
        }
        miliSeconds_html.innerText = miliSeconds ;
        seconds_html.innerText = seconds < 10 ? '0' + seconds + ":" : seconds;
        minutes_html.innerText = minutes < 10 ? '0' + minutes + ":" : minutes;

        start_button.disabled = true;
    },10)
}
function stop() {
    clearInterval(watchInterval);
    start_button.disabled = false;

}
function reset() {
    clearInterval(watchInterval);
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    minutes_html.innerText = 0 + "0:";
    seconds_html.innerText = 0 + "0:";
    miliSeconds_html.innerText = 0 + "0";
    start_button.disabled = false;
}