let items = document.querySelectorAll(".item")
let answer = document.querySelector(".answer p")
let deleteAll = document.querySelector(".delete-all")
let equalBtn = document.querySelector(".equal-btn")
let body = document.querySelector("body")


body.addEventListener("keydown",function(e){
    if (e.keyCode == 48) {
        answer.innerText += String.fromCharCode(48)
    }
    if (e.keyCode == 49) {
        answer.innerText += String.fromCharCode(49)
    }
    if (e.keyCode == 50) {
        answer.innerText += String.fromCharCode(50)
    }
    if (e.keyCode == 51) {
        answer.innerText += String.fromCharCode(51)
    }
    if (e.keyCode == 52) {
        answer.innerText += String.fromCharCode(52)
    }
    if (e.keyCode == 53) {
        answer.innerText += String.fromCharCode(53)
    }
    if (e.keyCode == 54) {
        answer.innerText += String.fromCharCode(54)
    }
    if (e.keyCode == 55) {
        answer.innerText += String.fromCharCode(55)
    }
    if (e.keyCode == 56) {
        answer.innerText += String.fromCharCode(56)
    }if (e.keyCode == 57) {
        answer.innerText += String.fromCharCode(57)
    }
    if (e.keyCode == 13) {
        answer.innerText = eval(answer.innerText)
    }
    if (e.keyCode == 8) {
        let result = "";
        for (let i = 0; i < answer.innerText.length; i++) {
            if (i != answer.innerText.length-1) {
                result+=answer.innerText[i]
            }
        }
        answer.innerText = result
    }
    if (e.keyCode == 67) {
        answer.innerHTML = ""
    }
})

equalBtn.addEventListener("click", function(){
    answer.innerText = eval(answer.innerText)
})

for (const item of items) {
    item.addEventListener("click", function(){
        answer.innerText += item.innerText
    })
}

deleteAll.addEventListener("click", function(){
    answer.innerHTML = ""
})