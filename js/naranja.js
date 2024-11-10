document.querySelector('.submit-btn').addEventListener('click', function() {
    let numero = parseFloat(document.getElementById('numero').value);
    
    if (isNaN(numero) || numero <= 0) {
      alert('Por favor, introduce un número válido de cajas.');
      return;
    }
  
    let precio = parseFloat(document.getElementById('precio').value);
    
    if (isNaN(precio) || precio <= 0) {
      alert('Por favor, introduce un precio válido.');
      return;
    }
  
    let resultado = (numero / 5) * precio;
  
    const today = new Date();
    const dia = today.getDate();
    const mesIndex = today.getMonth();
    
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    const mes = meses[mesIndex];
  
    let opcionesSeleccionadas = [];
    let opcionesNombres = [
      "Eberth", "Marco", "Roberto", "Antony", "Jose"
    ];
  
    document.querySelectorAll('.option-checkbox').forEach((checkbox, index) => {
      if (checkbox.checked) {
        opcionesSeleccionadas.push(opcionesNombres[index]);
      }
    });
  
    let textoResultado = `${dia} / ${mes} (${numero}) cajas * ${precio.toFixed(2)} € = ${resultado.toFixed(2)} €`;
  
    if (opcionesSeleccionadas.length > 0) {
      textoResultado += ' - ' + opcionesSeleccionadas.join(', ');
    }
  
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = textoResultado;
  
    document.querySelector('.input-container').style.display = 'none';
    document.querySelector('.price-container').style.display = 'none';
    document.querySelector('.options-container').style.display = 'none';
    document.querySelector('.submit-container').style.display = 'none';
  });
  