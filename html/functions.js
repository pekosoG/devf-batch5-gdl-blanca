function muestraMensaje(){
    var elNombre=document.getElementById('elNombre').value;
    if(elNombre.length>0)
        alert(`Hola ${elNombre}`);
}

//muestraMensaje();