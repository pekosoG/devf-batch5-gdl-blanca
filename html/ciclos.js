/**
 *  Imprimir 100 veces el mensaje en consola
 */
/*
for(conta = 1; conta < 10000; conta++){
    console.log(`Me canso ganzo ${conta} = ${conta*2}`);
    if(conta==7500)
        break;
}*/
/*
for(j=1;j<=10;j++){
    console.log(`Tabla del ${j}`);
    for(i=0; i<=10; i++){
        console.log(`${j} x ${i} = ${i*j}`);
    }
}*/

var elBody=document.getElementsByTagName('body')[0];

for(i=0;i<10000;i++){
    var elBoton=document.createElement('button');
    elBoton.textContent="el texto que se me pegue la gana";
    elBody.appendChild(elBoton);
}