let output = document.getElementById('output')
let words = [
    'TEKNOLOJI.'
]


let charTurn = 0
let wordTurn = 0

printWord()
function printWord(){
    if(charTurn <= words[0].length){
        output.innerHTML = words[0].substr(0, charTurn)
        charTurn++
        setTimeout(printWord, 300)
    }else{
        setTimeout(deleteWord, 1000)
    }
}


function deleteWord(){
    if(charTurn>= 0){
        output.innerHTML = words[0].substr(0, charTurn)
        charTurn--
        setTimeout(deleteWord, 200)
    }else{
        setTimeout(printWord, 300)
    }
}