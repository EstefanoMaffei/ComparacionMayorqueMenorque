



/* 

    El ejercicio va de poner a elegir cual numero es mayor, menor e igual de manera dinamica, tomando en cuenta los datos que da el usuario

*/

// Comienzo del programa//



const desicion = () => {
    
    
    let confirmacion = true;
    
    do{
         
            let primerNumero = prompt('Ingresa el numero a comparar aqui: ', 0 );
            
            typeof primerNumero
            
            let segundoNumero = prompt('Ingresa el otro numero a comparar', 'numero');
            
            typeof segundoNumero
            
            alert('se ejecutara en la consola de comandos, presiona F12 despues de aceptar este mensaje');
            
            if(primerNumero < segundoNumero ){
                
                console.alert('el numero ', primerNumero, ' es menor que el ', segundoNumero);
                
            }else if( primerNumero > segundoNumero ){
                
                console.alert('el numero ', primerNumero, ' es mayor que el ', segundoNumero);
                
                
            }else if (primerNumero === segundoNumero){
                
                console.alert('el numero ', primerNumero, ' es igual que el ', segundoNumero);
                
                
            }
            
            confirmacion = confirm('¿quieres seguir ejecutando el programa?', true);

            
        
    } while( confirmacion);
    



}

desicion()