let pwLen = 10

let opt1 = document.getElementById("_1")
let opt2 = document.getElementById("_2")
let opt3 = document.getElementById("_3")
let opt4 = document.getElementById("_4")
let options = [opt1, opt2, opt3, opt4]

function genPasswords() {
    let passwords = []
    for (let i = 0; i < 4; i++) {
        let randomPW = []
        for (let j = 0; j < pwLen; j++) {
            randomPW.push(String.fromCharCode(Math.floor(Math.random() * 90) + 33))
        }
        passwords.push(randomPW.join(""))
    }
    
    for (let i = 0; i < options.length; i++) {
        options[i].value = passwords[i]
    }
}
