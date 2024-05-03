function sumaNumeros() {
    // Definir un array de números
    var numeros = [1, 2, 3, 4, 5];
    
    // Función para calcular la suma de los números
    function sumaNumeros(lista) {
      var suma = 0;
      for (var i = 0; i < lista.length; i++) {
        suma += lista[i];
      }
      return suma;
    }
    
    // Calcular la suma de los números en el array
    var resultado = sumaNumeros(numeros);
    
    // Imprimir el resultado en la consola del editor de Google Apps Script
    console.log("La suma de los números es: " + resultado);
  }
  