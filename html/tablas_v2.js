/**
 * Este práctica genera tablas de multiplicar segun el input del usuario.
 * 
 * Temas a aplicar:
 *  - Ciclos FOR
 *  - Leer elementos de HTML
 *  - Crear Elementos de HTML
 *  - Magia Negra
 * 
 * @author PekosoG 
 */


/**
 * Esta funcion lee el input y valida si es un numero antes
 * de crear todo el merequetengue
 */
function correTablas(){
    //Sacamos el dato del input
    var elDato=document.getElementById('laTabla').value;

    //Validamos que sea mayor a cero
    if(elDato>0)
        creaTablas(elDato); //Ejecutamos la función y envíamos el parametro
}

/**
 * Esta función recibe un numero como parámetro el limite para crear tablas
 * 
 * @param {number} limite 
 */
function creaTablas(limite){

    //Obtenemos el contenedor donde estará todo el show
    var elContenedor=document.getElementById('elContainer');
    elContenedor.innerHTML='';

    // Iniciamos el ciclo inicial, de la cantidad de tablas según el input del user
    for(i=1;i<=limite;i++){

        //Yo genero un div contenedor de mis tarjetas
        var tarjeta=document.createElement('div');
        tarjeta.classList.add("container");
        tarjeta.classList.add("with-title");
        tarjeta.classList.add("is-center");

        //Cada tarjeta va a tener un titulo que diga que tabla es
        var titulo=document.createElement('h3');
        titulo.textContent=`Tabla del ${i}`;
        titulo.classList.add('title');

        //Agrego el titulo a la tarjeta
        tarjeta.appendChild(titulo);

        //Comienzo con mi ciclo para las multiplicaciones
        for(j=1;j<=10;j++){

            //El texto lo pongo en un Parrafo
            var parrafo=document.createElement('p');
            parrafo.textContent=`${i} x ${j} = ${i*j}`;

            //Y se lo agrego a la tarjeta
            tarjeta.appendChild(parrafo);
        }

        //Agregamos la tarjeta al contenedor
        elContenedor.appendChild(tarjeta);

    }

}