function entrar(id){
    let opcao = document.getElementById(id)
    opcao.style.font = 'normal 20px "Trebuchet MS"'
    opcao.style.transition = 'transform 0.5s'
    opcao.style.transform = 'translateX(10px) scale(1.1)'
    opcao.style.backgroundColor = 'rgba(116, 36, 190, 0.78)'
}
function sair(id){
    let opcao = document.getElementById(id)
    opcao.style.font = 'normal 20px "Trebuchet MS"'
    opcao.style.transition = 'transform 0.5s'
    opcao.style.transform = 'translateX(0) scale(1)'
    opcao.style.backgroundColor = 'transparent'
}