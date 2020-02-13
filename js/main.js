//********variables globales*********************************************************************************************************** */


var simpsonsQuoteUlr = 'https://thesimpsonsquoteapi.glitch.me/quotes?';
var cantQoute = 10;



window.onload = function() {
    console.log("funciono");
    pedirfrasesSimpson();
};



function pedirfrasesSimpson() {

    fetch(simpsonsQuoteUlr + '&count=' + cantQoute)
    .then(respuesta => {
        return respuesta.json();
    }).then(datos => {
        //datos s un arrray
        console.log(datos);

        colocarLasFraces(datos);

    }).catch(error => {
        console.log(error);
    })
}

function colocarLasFraces(datos){

    for (const personaje of datos) {
   
   var tarjeta = document.createElement('div');
   


        
    }






}