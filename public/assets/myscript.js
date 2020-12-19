let sign1 = "X";
let score1 = document.getElementById('score1');
let scoreValue1 = 0;
let sign2 = "Y";
let score2 = document.getElementById('score2');
let scoreValue2 = 0;
let round = 0;
let restartButton = document.getElementById('restart');
let position = [];
//let position_content = [];
for(let i = 0; i < 9; i++) {
    position[i] = document.getElementById(i);
//  position_content[i] = position[i].textContent;
}

for (let i = 0; i < 9; i++) {
    position[i].addEventListener("click", () => {
        if ( position[i].textContent === '') {
            if (round % 2 === 1) {
                position[i].innerHTML = sign2;
            } else {
                position[i].innerHTML = sign1;
            }
            if (row() || column() || diagonal()) {
                setTimeout(function () {
                    alert("You win!");
                }, 250);
                setTimeout(restart, 250);
                if (round % 2 === 1) {
                    scoreValue2++;
                    score2.innerHTML = scoreValue2;
                } else {
                    scoreValue1++;
                    score1.innerHTML++;
                }
            }
            round++;
        }
    });
}

restartButton.addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        position[i].innerHTML = "";
    }
})

function restart() {
    for (let i = 0; i < 9; i++) {
        position[i].innerHTML = "";
    }
}

function row() {
    for (let i = 0; i <= 6; i += 3) {
        if (position[i].textContent !== "" &&
            position[i].textContent === position[i+1].textContent &&
            position[i + 1].textContent === position[i+2].textContent
        ) {
            return true;
        }
    }
}

function column() {
    for (let i = 0; i < 3; i++) {
        if (position[i].textContent !== "" &&
            position[i].textContent === position[i+3].textContent &&
            position[i+3].textContent === position[i+6].textContent
        ) {
            return true;
        }
    }
}

function diagonal() {
    if (position[4].textContent !== "") {
        if (position[0].textContent === position[4].textContent &&
            position[4].textContent === position[8].textContent
        ) {
            return true;
        }
        else if (position[2].textContent === position[4].textContent &&
            position[4].textContent === position[6].textContent
        ) {
            return true;
        }
    }
}


/*
function play(sign){
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).addEventListener("click", () => {
            document.getElementById(i).innerHTML = sign;
        });
    }
    round++;
}
*/


/*                let player1 = true;
                let player2 = true;
                const play =(theName) => {
                    document.getElementById(theName).style.borderColor="red";
                    document.getElementById(theName).style.color="red";
                    for (let i=0;i<9;i++) {
                       document.getElementById(i).addEventListener("click", ()=> {
                            if (player1) {
                                document.getElementById(i).textContent="X";
                                player1=!player1;
                            }
                            else {
                                document.getElementById(i).textContent="O";
                                player1=!player1;
                             }
                               if (player2) {
                                   document.getElementById(i).textContent="X";
                                   player2=!player2;
                               }
                               else {
                                   document.getElementById(i).textContent="O";
                                   player2=!player2;
                               }
                        }
                        );
                        break;
                    }
                };
                play("name1");
                play("name2"); //Les deux instructions s'enchainent sans attendre, on arrive tout de suite à la dernière instruction ?



        */


