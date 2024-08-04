let text = document.querySelector("h1")
let value = text.innerHTML
let count = 0

text.innerHTML = ""

function textjs(){
    text.innerHTML += value.charAt(count)
    count++

    if(count>value.length){
        text.innerHTML=""
        count= 0
    }
}

let stop = setInterval(function(){
    textjs()
},300)



// ==========================================> Daynamic Count <==========================================

let counter = document.querySelectorAll("p")
let arr = Array.from(counter)



arr.map((item)=>{
    let number = item.innerHTML
    let a = 0

    function counterjs(){
        item.innerHTML =a
        a++
        if(a>number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(() => {
        counterjs()
    }, 1000/number);


    
    
})

// let div = document.querySelector("div")
// let move = document.querySelectorAll("p")
// let p = Array.from(move)
// console.log(p);
// p.map((item)=>{
//     div.addEventListener("mousemove", (event)=>{
//         item.style.left = `${event.clientY}px`
//         console.log(item);
//     })
    
// })
