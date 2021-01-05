function barajaTarjetas(tarjetas){
    var resultado;
    resultado = tarjetas.sort(function(){
        return 0.5 - Math.random();
    });
    return resultado;
}

function reparteTarjetas(tarjetas){
    let mesa=document.getElementById("cards-display");
    mesa.innerHTML=""; /* Limpiar la mesa */

    tarjetas.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML= 
        '<div class="card" data-valor="'+elemento+'"><span class="tarjeta__contenido">'+elemento+'</span>';

        mesa.appendChild(tarjeta);
    });
}

function comparaTarjetas(one, two){
    return one.dataset.valor == two.dataset.valor;
}

function descubreTarjeta(){

    /* Si la tarjeta ya esta abierta o acertada, no hace la comparación (porque no hay nada para comparar...) */
    var tarjetasDescubiertas = Array.from(document.getElementsByClassName("descubierta"));
    if(tarjetasDescubiertas.length > 1 || this.classList.contains("listo") || this.classList.contains("descubierta")){
        return 0;
    }
    
    this.classList.add("descubierta");
    document.getElementById("sonido-carta").cloneNode().play();

    /* tarjetasDescubiertas actualizada */
    tarjetasDescubiertas = Array.from(document.getElementsByClassName("descubierta"));
    

   if(tarjetasDescubiertas.length ==2){
        setTimeout(function(){
            abrirdef(tarjetasDescubiertas);
            if(comparaTarjetas(tarjetasDescubiertas[0], tarjetasDescubiertas[1]))
                acierto(tarjetasDescubiertas);
        }, 1000);
        cuentaJugadas();  
   }
    
    
}

function preparaTarjetas(tarjetas){
    tarjetas = barajaTarjetas(tarjetas);
    reparteTarjetas(tarjetas);
    Array.from(document.getElementsByClassName("card")).forEach(function(elemento){
        elemento.addEventListener("click", descubreTarjeta);
    });
}

function limpiaCartas(){
    var cartas = Array.from(document.getElementsByClassName("listo"));
    cartas.forEach(function(element){
        element.classList.remove("acertada");
    });
}