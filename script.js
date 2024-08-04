let text = document.querySelector("h1")
let value = text.innerHTML
let count = 0

text.innerHTML = ""

 function typejs(){
    text.innerHTML += value.charAt(count)
    count ++

    if(count> value.length){
        text.innerHTML = ""
        count = 0
    }
 }


 let stop = setInterval(function(){
    typejs()
 },800)


 let counter = document.querySelectorAll("p")
 let arr = Array.from(counter)

 arr.map(item=>{
    let show = item.innerHTML
    let a  = 0


function counterjs(){
    item.innerHTML = a
    a++
    if(a>show){
        clearInterval(stop1)
    }
}


let stop1 = setInterval( function(){
    counterjs()
},1000/show)
 })
 