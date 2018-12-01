console.log('ya cargó el JS');
console.error('ya valio madre');

var edad=14;

if(edad>=18){
    console.log('ya está grande');

    
}else{
    console.log('esta morro todavia');
    if(edad>=6 & edad<=12){
        console.log('esta en la primaria');
    }else{
        if(edad>=13 & edad<=15){
            console.log('esta en la secu');
        }else{
            if(edad<=16 & edad>17){
                console.log('está en la prepa');
            }
        }
    }
}