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
