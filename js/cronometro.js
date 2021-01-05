
function iniciaCronometro(){
    var minutos = _tiempo;
    var segundos = 0;
    var minutosTexto = (minutos < 10) ? '0'+minutos : minutos.toString();
    let valueMinutos = document.getElementById("minutos");
    let valueSegundos = document.getElementById("segundos");
    valueSegundos.innerHTML= '00';
    valueMinutos.innerHTML = minutosTexto;

    function actualizaCronometro(){
        if(segundos==0){
            if(minutos==0) {clearInterval(intervalo); perdiste(); return;}
            minutos--;
            segundos=59;
        }
        else{
            segundos--;
        }
        var segundosTexto = (segundos < 10) ? '0'+ segundos : segundos.toString();
        var minutosTexto = (minutos < 10) ? '0'+minutos : minutos.toString();

        valueMinutos.innerHTML = minutosTexto;
        valueSegundos.innerHTML = segundosTexto;

    }

     intervalo = setInterval(actualizaCronometro, 1000);
}