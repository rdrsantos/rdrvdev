// cursor
function cursor(){
    const links = document.querySelectorAll('a')
    const cursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', (e) => {
        cursor.style.top = e.pageY + 'px'
        cursor.style.left = e.pageX + 'px'
    })
    links.forEach((link) =>{
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-g')
        })
        link.addEventListener('mouseout', () => {
            cursor.classList.remove('cursor-g')
        })
    })
}
cursor()

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
for(let i = 1; i <= 5; i++){
    modal(`pjt-${i}`, `btn${i}`, `modal${i}`)
}
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
  window.addEventListener('scroll', debounce(animar, 100));
}
//Animações