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
//Modal projetos

//Validação formulario
function validar() {
    let nome = document.querySelector("#nome")
    let email = document.querySelector("#email")
    let msg = document.querySelector("#msg")
    let btnSubmit = document.querySelector(".contato-form .btn")
    if(nome.value.length !== 0 || email.value.length !== 0 || msg.value.length !== 0){
        alert("Mensagem enviada com sucesso.")
        nome.value = ""
        email.value = ""
        msg.value = ""
    } else {
        alert("Preencha todos os campos corretamente!")
    }
    nome.focus()
}
//Validação formulario

//Animações
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
let items = document.querySelectorAll('[data-a]')
function animar(){
    let windowTop = pageYOffset + (window.innerHeight * 0.75)
    items.forEach((item) => {
        if((windowTop) > item.offsetTop){
            item.classList.add('ativo')
        }
    })
}
animar();
if(items.length) {
  window.addEventListener('scroll', debounce(animar, 200));
}
//Animações