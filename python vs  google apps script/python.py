# Definir una lista de números
numeros = [1, 2, 3, 4, 5]

# Función para calcular la suma de los números
def suma_numeros(lista):
    suma = 0
    for num in lista:
        suma += num
    return suma

# Calcular la suma de los números en la lista
resultado = suma_numeros(numeros)

# Imprimir el resultado
print("La suma de los números es:", resultado)
