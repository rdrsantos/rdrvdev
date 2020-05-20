//Modal projetos
function modal (projetoId, btn, modalItem){
    let projeto = document.querySelector(`.${projetoId}`)
    let btnClose = document.querySelector(`.${btn}`)
    let modalTarget = document.querySelector(`.${modalItem}`)    
    projeto.addEventListener("click", () => {
        modalTarget.classList.add("modal-on")
    })
    btnClose.addEventListener("click", () => {
        modalTarget.classList.remove("modal-on")
    })
}
modal("pjt-1", "btn-close-1", "modal-container-1")
modal("pjt-2", "btn-close-2", "modal-container-2")
modal("pjt-3", "btn-close-3", "modal-container-3")
modal("pjt-4", "btn-close-4", "modal-container-4")
modal("pjt-5", "btn-close-5", "modal-container-5")
modal("pjt-6", "btn-close-6", "modal-container-6")
//Modal projetos
