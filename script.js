document.querySelector('button').addEventListener("click", calcularIMC);


function calcularIMC() {
    
    const peso = parseFloat(document.getElementById('pesoImc').value);
    const altura = parseFloat(document.getElementById('alturaImc').value);

    const resultadoImc = peso / (altura*altura);
    
    //alert('resultado es: '+resultadoImc);

    // operadores logicos y condicionales

    let categoria = '';

    if (resultadoImc < 18.5) {  // evaluar 0 - 18.4
        categoria = 'Bajo Peso';
    }else if (resultadoImc < 25) { // 18.5 - 24.9
        categoria = 'Peso Normal'
    }else if (resultadoImc < 30) {  // 25 - 29.9
        categoria = 'Sobrepeso';
    }else{
        categoria = 'Obesidad'; // 30 - infinito
    }

    document.getElementById('valorImc').textContent = resultadoImc.toFixed(2);
    document.getElementById('categoriaImc').textContent = categoria;
    document.getElementById('resultadoImc').style.display = 'block';



    /*
     si imc es menor 18.5 la categoria es Bajo peso
     si el imc esta entre 18.6 y 25 la cat es peso normal
     si el imc esta entre 25.1 y 30 la cat es sobrepeso
     si el imc esta por encima de 31 la cat es obesidad   
    
    */
}
