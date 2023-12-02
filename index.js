// Created by Edwin Aguilar

// Created by Kevin Rodriguez 

// Created by Vinod Kushwaha

// Created by Aakaanksha💕

var i=0, s=1;

var wish = ["Querida Lizbeth ,Desde que te conocí, mi vida se llenó de alegría y emoción. Me encanta jugar contigo a Mobile Legends, porque eres la mejor compañera que podría tener. Siempre me apoyas, me ayudas, me haces reír y me sorprendes con tus habilidades. Eres más que un amiga, eres mi alma gemela" +
"(🍧🍬🍨🎂🍰🍧🍰🍬🍧)",

    "Una de las cosas que más me gusta de ti es que cuando usas Floryn, el héroe de la naturaleza. Me fascina ver cómo controlas sus poderes y cómo haces crecer las plantas en el campo de batalla. Cuando juegas con Floryn, siento que me complementas, que me proteges y que me das vida. Eres como el sol que ilumina mi camino, y yo quiero ser tu luna que te acompaña en la noche...☪☾✩☽🌙🌚🌕",

    "Por eso, hoy quiero preguntarte algo muy especial. Quiero que seas mi duo oficial en Mobile Legends, y que juguemos juntos siempre que se pueda. Quiero que compartamos nuestras victorias, nuestras derrotas, nuestros sueños ,nuestros secretos, risas y momentos. Quiero que seamos el mejor equipo del mundo, y que nadie nos pueda separar...",

    "¿Qué dices? ¿Aceptas ser mi duo? Espero que sí, porque te quiero mucho y no puedo imaginar mi vida sin ti... Por favor, dime que sí, y hazme el hombremás feliz de este universo. Con amor y cariño, Noa"];

window.addEventListener('click', function () {

if(s===1){
    document.getElementById("song").play();
    s=0;
}

    var card = document.getElementById("card");
    var msg = document.getElementById("msg");

    if(i===0) {
        card.style.transform = 'translateY(-50%) scale(1)';
    }

    if(i<=3){
        if(i===0)
            card.style.fontSize = "13px";
        else
            card.style.fontSize = "13px";
        msg.innerHTML = wish[i++];
    }else{
        card.style.transform = 'translateY(-50%) scale(0)';
        i=0;
    }

});