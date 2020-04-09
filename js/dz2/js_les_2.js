window.onload=function (event) {
    newgame= new Game(100,0,10);
    document.querySelector("#min").textContent=newgame.getMin();
    document.querySelector("#max").textContent=newgame.getMax();

    var leftAttempt=document.querySelector("#leftAttempt"),
    inputNumber=document.querySelector("#number-input"),
    play=document.querySelector("#play");
    statusLine=document.querySelector(".status");
    console.log(newgame.getSecretNumber());
    leftAttempt.textContent=newgame.leftAttempt;

        play.addEventListener("click", function(event){
                if (newgame.getLeftAttempt()>0) {
                    switch(newgame.playStep(inputNumber.value)) {
                        case "error":
                            statusLine.textContent = "введите числа от " + newgame.getMin() + " до " + newgame.getMax();
                            leftAttempt.textContent=newgame.getLeftAttempt();
                            break;
                        case true:
                            statusLine.textContent = "вы отгадали число, было загадано " + newgame.getSecretNumber();
                            leftAttempt.textContent=newgame.getLeftAttempt();
                            break;
                        case false:
                            if (inputNumber.value < newgame.getSecretNumber()) {
                                statusLine.textContent = "ваше число меньше загадоного ";
                                leftAttempt.textContent=newgame.getLeftAttempt();
                            } else if (inputNumber.value > newgame.getSecretNumber()) {
                                statusLine.textContent = "ваше число больше загадоного ";
                                leftAttempt.textContent=newgame.getLeftAttempt();
                            }
                            break;
                    }
                } else {
                    statusLine.textContent="у вас закончились попытки и вы проиграли, было загадано число:"+newgame.getSecretNumber();
                }

            }
        )
}