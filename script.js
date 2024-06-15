let points = 0;
points.style.color = "green"
function Add() {
    if (document.querySelector('.box1').style.background == "blue") {
        points++;
    }
}
function Add1() {
    if (document.querySelector('.box2').style.background == "blue") {
        points++;
    }
}
function Add2() {
    if (document.querySelector('.box3').style.background == "blue") {
        points++;
    }
}
function Add3() {
    if (document.querySelector('.box4').style.background == "blue") {
        points++;
    }
}
function Add4() {
    if (document.querySelector('.box5').style.background == "blue") {
        points++;
    }
}


/////////////

function Start() {
    let timer = 0;
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 5)
        while (random == 0) {
            random = 5;
        }
        let initialize = document.querySelector(`.box${random}`)
        timer++;
        setTimeout(function white() {
            setTimeout(function change() {
                initialize.style.background = " white"

            }
                , 600)
            initialize.style.background = " blue"

        }
            , 700 * timer)
    }
    setTimeout(() => {
        Display()

    }, 8000)
}
function Display() {
    let btn = document.createElement("button")
    btn.innerHTML = "Display result";
    let body = document.querySelector("body")
    body.appendChild(btn)
    let h = document.createElement('h1')
    h.innerHTML = "Your Points"
    btn.appendChild(h)
    btn.addEventListener("click", function () {
        let p = document.createElement('p')
        h.appendChild(p);
        p.innerText = `You score ${points} out of 10`
        points = 0;
    })

}

