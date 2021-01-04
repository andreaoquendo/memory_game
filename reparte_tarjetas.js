function reparteTarjetas(tarjetas){
    let mesa=document.getElementById("cards-display");
    mesa.innerHTML="";

    

    tarjetas.forEach(function(elemento){
        var tarjeta = document.createElement("div");
        tarjeta.innerHTML= '<div class="card" data-valor="'+elemento+'"><span class="tarjeta__contenido">'+elemento+'</span>';
        mesa.appendChild(tarjeta);
    });
}

function barajaTarjetas(tarjetas){
    var resultado;
    resultado = tarjetas.sort(function(){
        return 0.5 - Math.random();
    });
    return resultado;
}

function comparaTarjetas(one, two){
    return one == two;
}

function descubreTarjeta(){
    var tarjetasDescubiertas = Array.from(document.getElementsByClassName("descubierta"));
    if(tarjetasDescubiertas.length > 1 || this.classList.contains("listo")){
        return 0;
    }
    
    this.classList.add("descubierta");
    tarjetasDescubiertas = Array.from(document.getElementsByClassName("descubierta"));
    document.getElementById("sonido-carta").cloneNode().play();
    if(tarjetasDescubiertas.length ==2){
        
        if (comparaTarjetas(tarjetasDescubiertas[0].dataset.valor, tarjetasDescubiertas[1].dataset.valor)){
            document.getElementById("sonido-acierto").cloneNode().play();
            setTimeout(function(){
                tarjetasDescubiertas[0].classList.remove("descubierta");
                tarjetasDescubiertas[1].classList.remove("descubierta");
                tarjetasDescubiertas[0].classList.add("listo");
                tarjetasDescubiertas[1].classList.add("listo");
                win(document.getElementsByClassName("listo").length);
            }, 1000)
        }
        else{
            setTimeout(function(){
                tarjetasDescubiertas[0].classList.remove("descubierta");
                tarjetasDescubiertas[1].classList.remove("descubierta");
                
            }, 1000)
           
        }
        cuentaJugadas();  
        
    }
    
}

function win(num){
    if(num==_grupoTarjetas.length){
        ganaste();
    }
}

function preparaTarjetas(tarjetas){
    tarjetas = barajaTarjetas(tarjetas);
    reparteTarjetas(tarjetas);
    Array.from(document.getElementsByClassName("card")).forEach(function(elemento){
        elemento.addEventListener("click", descubreTarjeta);
    });
    
}
