//Modal projetos
function modal (projetoId, btn, modalItem){
    let projeto = document.querySelector(`.${projetoId}`)
    let btnClose = document.querySelector(`#${btn}`)
    let modalTarget = document.querySelector(`#${modalItem}`)    
    projeto.addEventListener("click", () => {
        modalTarget.classList.add("modal-on")
    })
    btnClose.addEventListener("click", () => {
        modalTarget.classList.remove("modal-on")
    })
}
modal("pjt-1", "btn1", "modal1")
modal("pjt-2", "btn2", "modal2")
modal("pjt-3", "btn3", "modal3")
modal("pjt-4", "btn4", "modal4")
modal("pjt-5", "btn5", "modal5")
modal("pjt-6", "btn6", "modal6")
//Modal projetos

//squares

function squares(ulId){

const ulSquares = document.querySelector(`#${ulId}`)
for(let i = 0; i < 11; i++){
    const li = document.createElement("li")
    const random = (min, max) => Math.random() * (max - min) + min
    const size = Math.floor(random(5, 100))
    const position = random(1, 99)
    const delay = random(5, 0.1)
    const duration = random(1, 20)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`
    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()},, ${Math.random()})`
    if(ulId == "squaresB" || ulId == "squaresB1"){
        li.style.backgroundColor = "rgba(0, 6, 102, .10)"
    }
    ulSquares.appendChild(li)
}}
squares("squaresInicio")
squares("squaresTec")
squares("squaresContato")
//squares