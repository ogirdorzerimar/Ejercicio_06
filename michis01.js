console.log('A--------------------------------------------------------------------------------')

for( var cantidadDeGatos =1; cantidadDeGatos <= 10; cantidadDeGatos++){

            if(cantidadDeGatos == 1 || cantidadDeGatos % 5 == 0 || cantidadDeGatos % 7 == 0){
                console.log( 'gato #'+ cantidadDeGatos +': ' +'😺')
            }
            if(cantidadDeGatos % 2 == 0 && cantidadDeGatos % 1 == 0 && !(cantidadDeGatos % 3 == 0) && !(cantidadDeGatos % 5 == 0)){
                console.log( 'gato #'+ cantidadDeGatos +': ' +'😸')
            }
            if(cantidadDeGatos % 3 == 0 && cantidadDeGatos % 1 == 0){
                console.log( 'gato #'+ cantidadDeGatos +': ' +'😹')
            }
            
        }
