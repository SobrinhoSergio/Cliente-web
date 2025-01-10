const { rejects } = require("assert");

function carregarFrutas( num) {
        return new Promise( resolve=> {
            setTimeout( () => {
                if(num>5)
                resolve("Ok");
                else 
                rejects('Número menor que 5');
            }, 2000 );
        });
}

//document.addEventListener( 'DOMContentLoaded', () => {
    const promessa = carregarFrutas(3);
    promessa.then( ( a ) => {
        console.log( 'As frutas são: ', a );
    } ).catch(error=> {
        console.log(error);
    });
   
    console.log( 'Fim do script.' );
//});