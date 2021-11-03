//Para que se obedezcan las ordenes desde js
document.addEventListener('DOMContentLoaded', () =>{
    //Declaramos una matriz de tamaño inmutable
    const matriz = document.querySelector('.matriz');
    let ancho = 10;
    let cuadraditos = [];

    //Creación del tablero
    function crearTablero(){
        //Aquí he hecho un bucle cuadrado para completar la matriz 
        for(let i = 0; i < ancho*ancho; i++){
            //Creamos los cuadraditos
            const cuadradito = document.createElement('div');
            //Llamamos a cada cuadradito
            cuadradito.setAttribute('id', i);
            //Lo añadimos a nuestra matriz
            matriz.appendChild(cuadradito);
            //Ponemos cada cuadradito en el vector
            cuadraditos.push(cuadradito);
        }
    }
    crearTablero();
})