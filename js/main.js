// Programa: Calculadora Estadística

// Funciones

function calcula_media(data) {
    let sum=0
    for (dato of data) {
        sum+=dato
    }
    return sum/data.length
}

function calcula_mediana(data) {
    data=data.sort(function (a, b) {  return a - b;  })   // Funcion para ordenar los datos de menor a mayor
    if (data.length % 2 == 0) {
        return (data[Math.floor(data.length/2)-1]+data[Math.floor(data.length/2)])/2  // Si la cantidad de datos es par retorna el promedio de los dos datos del medio
    } else {
        return data[Math.floor(data.length/2)]  // Si la cantidad de datos es impar retorna el dato del medio
    }
}

function calcula_desvio(data) {
    let media=calcula_media(data)
    let sum=0
    for (dato of data) {
        sum+=(dato-media)*(dato-media)
    }
    return Math.sqrt(sum/data.length)
}


// Comienzo

let continuar=true

while (continuar==true) {

    let opcion_valida=false
    let cantidad = 0
    while (opcion_valida==false) {
        cantidad = parseInt(prompt("Bienvenido a la calculadora estadística\nIngrese la cantidad de datos:\nNOTAS:\n a - debe ser un número mayor o igual a 2\n b - si ingresa un numero con decimales se redondea"))
        if (cantidad>=2) {
            opcion_valida=true
        } else {
            alert("Dato incorrecto - Ingrese nuevamente")
        }
    }

    cantidad=Math.floor(cantidad)


    let datos= []
    let num = 0
    let numero_valido=false

    for (let i=1;i<=cantidad;i++) {
        numero_valido=false
        while (numero_valido==false) {
            num=parseFloat(prompt("Ingrese el número " + i + ": "))
            if (isNaN(num)) {
                alert("Dato incorrecto - Ingrese nuevamente")
            } else {
                datos.push(num)
                numero_valido=true
            }
        }
    }

    console.log("Datos ingresados: " + datos)
    
    let continua_opcion=true
    let opcion=0
    while (continua_opcion==true) {
        opcion=parseInt(prompt("Ingrese:\n1 - Promedio\n2 - Mediana\n3 - Desvío estandar\n4 - Reingresar datos\n5 - Salir"))
        switch (opcion) {
            case 1:
                console.log("El promedio es: "+calcula_media(datos))
                break
            case 2:
                console.log("La mediana es: "+calcula_mediana(datos))
                break
            case 3:
                console.log("El desvío estandar es: "+calcula_desvio(datos))
                break
            case 4:
                continua_opcion=false
                continuar=true
                break
            case 5:
                continua_opcion=false
                continuar=false
                break
            default:
                continua_opcion=true
                alert("Dato incorrecto - Ingrese nuevamente")
        }
    }    
}