/*Ejercicio 4
● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso. */

listaPrecios= [200,5500,900,7000,500,300] 
function numeroMenor(listaPrecios){
var menor - listaPrecios[0]; 
    for(let i=0; i<listaPrecios.length; i++){ //recorre el array 
        if(listaprecios[i]< menor){// comparando los distintos objetos para ver cual es el menor
            menor=listaPrecios[i];
        }
    }
    return valormenor;
  }
  var menor=

  /*Ejercicio 3
  Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba*/

function verificacion(array) {
    for(let i=0; i<array.length; i++){ //for para recorrer el array y revisar posicion por posición, i++ para repetir operacion con el sifuiente
      if(array[i]>0){ // si el objeto del array es mayor a 0 devuelve mensaje de exito
        console.log("exito");
      }else{
        console.log("error"+array[i])// si no devuelve mensaje de error más el objeto negativo
      }
      }
    }
array= [-200,400]
  verificacion(array)

  /* Ejercicio 2
  Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.*/

function totalcompra(precios){
    while(precios[i]>10000 && precios.length>3) //mientras haya un precio sobre 10 mil y el largo del arry es mas de 3 objetos
do{preciosnuevos[i].push(x*0.95);
console.log(preciosnuevos)} //aplica descuento de 5%
}
preciosnuevos=[]
