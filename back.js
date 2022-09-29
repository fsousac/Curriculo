function entrar(id){
    let opcao = document.getElementById(id)
    opcao.style.font = 'normal 20px arial'
    opcao.style.transition = 'transform 0.5s'
    opcao.style.transform = 'translateX(10px) scale(1.3)'
    opcao.style.borderColor = 'rgb(0, 185, 185)'
}
function sair(id){
    let opcao = document.getElementById(id)
    opcao.style.font = 'normal 15px arial'
    opcao.style.transition = 'transform 0.5s'
    opcao.style.transform = 'translateX(0) scale(1)'
    opcao.style.borderColor = 'transparent'
}