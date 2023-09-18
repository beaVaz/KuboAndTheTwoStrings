function abrirMenu(){
    iconAbrir.style.display="none";
    iconFechar.style.display="inline";
    menu.style.display="flex";
    navigationSocial.style.display="flex"
    
}

function fecharMenu(){
    iconAbrir.style.display="inline";
    iconFechar.style.display="none";
    menu.style.display="none";
    navigationSocial.style.display="none"

}

function verificarLarguraTela(){
     var larguraTela = window.innerWidth
    if(larguraTela>=768){
        iconAbrir.style.display="none";
        iconFechar.style.display="none";
        menu.style.display="flex";
        navigationSocial.style.display="flex"
    }
    else{
        iconAbrir.style.display="inline";
        iconFechar.style.display="none";
        menu.style.display="none";
        navigationSocial.style.display="none"
    }
}
window.addEventListener("resize", verificarLarguraTela)
   
