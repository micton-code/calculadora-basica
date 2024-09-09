function realizarOperacion (operacion) {
    
    // Obtener los valores ingresados por el usuario
    let numA = parseInt(document.getElementById("numeroA").value)
    let numB = parseInt(document.getElementById('numeroB').value)
    let resultado

    // Verificar que los números sean válidos
    if (isNaN(numA) || isNaN(numB)) {
        resultado = "Por favor, ingrese números válidos.";
    } else {
        // Realizar la operación seleccionada
        switch (operacion) {
            case 'sumar':
                resultado = numA + numB
                break
            case 'restar':
                resultado = numA - numB
                break
            case 'multiplicar':
                resultado = numA * numB
                break
            case 'dividir':
                if (numB !== 0) {
                    resultado = numA / numB
                } else {
                    resultado = "No se puede dividir por cero."
                }
                break
        }
    }
    //Mostrar el Resultado
    document.getElementById("resultado").innerText= `Resultado = ${resultado}`
}