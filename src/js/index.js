const botao = document.querySelector(".btn-plataforma")

const elementosPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click" ,()=>{
    elementosPlataformas.classList.toggle('ativo')
})