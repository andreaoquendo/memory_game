function muestraMensaje(mensaje){

    juego.style.display="none";
    messagepage.style.display="block";

    //mostrar mensaje
    var mensaje= document.getElementById("fail");
    mensaje.style.display="block";
    clearInterval(intervalo);

}

function addBotones(num){
    document.getElementsByClassName("volver")[num]
    .addEventListener("click", goBack);
    
    document.getElementsByClassName("intentar")[num]
    .addEventListener("click", restart);
}

function perdiste(){

    var mensaje= document.getElementById("fail");
    muestraMensaje(mensaje);

    addBotones(0);
}

function ganaste(){
    
    var mensaje= document.getElementById("succeed");
    muestraMensaje(mensaje);

    addBotones(1);
}

