let listaNumerosSorteados=[];
let numeroSecreto=0;
let numeroMaximo=10;
let intentos=1;
function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
   
    
}
function verificarIntentoDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if( numeroDeUsuario===numeroSecreto)
        {
            asignarTextoElemento('p',`acertaste al numero secreto en ${intentos} ${(intentos===1)?'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el NUMERO SECRETO ES MENOR');
        }
        else {asignarTextoElemento('p','EL NUMERO SECRETO ES MAYOR')}
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo)
        {
        asignarTextoElemento('p','YA SE SORTEARON TODOS LOS NUMEROS');
        return;
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
         }
        else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`INGRESA UN NUMERO DE 1 AL ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}
condicionesIniciales();