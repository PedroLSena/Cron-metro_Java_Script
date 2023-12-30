
//cria um 'template' de horas zeradas usando o timeZone
function criaHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}

let displayHoras = document.querySelector('.tempo');
let btnPausa = document.querySelector('.pausa');
let btnInicia = document.querySelector('.iniciar');
let btnZera = document.querySelector('.zerar');

let segundos = 0;
let timer;


//aloca os segundos do timer no template de horas criaHoras(;)
function inicioHoras(){
     timer = setInterval(function(){
        segundos++;
        displayHoras.innerHTML = criaHora(segundos);
},1000);
}

//clearInterval congela o tempo
btnInicia.addEventListener('click',function(e){
    clearInterval(timer);
    inicioHoras();
    
});
btnPausa.addEventListener('click',function(e){
    clearInterval(timer);

});
btnZera.addEventListener('click',function(e){
    clearInterval(timer);
    displayHoras.innerHTML='00:00:00';
    segundos=0;
});