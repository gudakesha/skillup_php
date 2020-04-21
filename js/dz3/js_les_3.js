var leftTime=document.querySelector("#leftTime");

/*function TimeLeft(from, to) {
    let current = from;

    function go() {
        leftTime.textContent=to-current;
        if (to-current<=20 ) {
            leftTime.classList.add("littleTime");
        }
        else {
            leftTime.classList.remove("littleTime");
        }
        if (to-current<=0) {
            clearInterval(timerId);
            alert("ты бездельничаешь");
        }

        current++;
    }
    go();
    let timerId = setInterval(go, 1000);
}*/
function startTimer(timer) {
        var currentTime=timer;
         timerId = setInterval(function() {
            if(currentTime>0) {
                console.log(timer);
                console.log(currentTime);
                leftTime.textContent=currentTime;
            }
            else {
                leftTime.textContent=currentTime;
                clearInterval(timerId);
                alert("ты бездельничаешь");
                startTimer(timer);
            }
             currentTime--;
        }, timer*100);

}
var timer=12;
window.onload=function (event) {


    document.onclick=document.onchange=document.onblur=document.ondblclick=document.onkeyup=window.onmouseover=window.mousemove=function () {
        //startTimer(timer);
        clearInterval(timerId);
        startTimer(timer);
    }
    startTimer(timer);



}




