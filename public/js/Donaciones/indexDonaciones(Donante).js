const donaciones = [
    { "id": 1, "donacion": "Dinero", "cantidad": "$2500000", "tipoDonacion": "Efectivo", "fechaDonado": "19/11/2023", "estado": "Aceptado" },
    { "id": 2, "donacion": "Dinero", "cantidad": "$500000", "tipoDonacion": "Transacción", "fechaDonado": "20/11/2023", "estado": "Pendiente" },
    { "id": 3, "donacion": "Medicamento", "cantidad": "Ensure", "tipoDonacion": "Caja", "fechaDonado": "21/11/2023", "estado": "Pendiente" },
    { "id": 4, "donacion": "Dinero", "cantidad": "$2500000", "tipoDonacion": "Efectivo", "fechaDonado": "19/11/2023", "estado": "Aceptado" },
    { "id": 5, "donacion": "Dinero", "cantidad": "$500000", "tipoDonacion": "Transacción", "fechaDonado": "20/11/2023", "estado": "Pendiente" },
    { "id": 6, "donacion": "Medicamento", "cantidad": "Ensure", "tipoDonacion": "Caja", "fechaDonado": "21/11/2023", "estado": "Pendiente" },
    { "id": 7, "donacion": "Dinero", "cantidad": "$2500000", "tipoDonacion": "Efectivo", "fechaDonado": "19/11/2023", "estado": "Aceptado" },
    { "id": 8, "donacion": "Dinero", "cantidad": "$500000", "tipoDonacion": "Transacción", "fechaDonado": "20/11/2023", "estado": "Pendiente" },
    { "id": 9, "donacion": "Medicamento", "cantidad": "Ensure", "tipoDonacion": "Caja", "fechaDonado": "21/11/2023", "estado": "Pendiente" },
    { "id": 10, "donacion": "Dinero", "cantidad": "$2500000", "tipoDonacion": "Efectivo", "fechaDonado": "19/11/2023", "estado": "Aceptado" },
    { "id": 11, "donacion": "Dinero", "cantidad": "$500000", "tipoDonacion": "Transacción", "fechaDonado": "20/11/2023", "estado": "Pendiente" },
    { "id": 12, "donacion": "Medicamento", "cantidad": "Ensure", "tipoDonacion": "Caja", "fechaDonado": "21/11/2023", "estado": "Pendiente" }
]

const imagenMarco = 'png-transparent-children-s-day-child-removebg-preview.png';
const imagenesArray = [
    '../images/imgDonaciones/img1.jpg',
    '../images/imgDonaciones/img2.jpg',
    '../images/imgDonaciones/img3.jpg',
    '../images/imgDonaciones/img4.jpg',
    '../images/imgDonaciones/img5.jpg',
    '../images/imgDonaciones/img6.jpg',
    '../images/imgDonaciones/img7.jpg',
];

const frases = [
    'Gracias por ser la luz que ilumina el camino de nuestros pequeños guerreros.',
    'Tu amor y apoyo son como medicina para el alma de los niños que luchan contra el cáncer.',
    'Estamos infinitamente agradecidos por tu contribución, que hace posible ofrecer tratamientos y cuidados especiales a nuestros niños.',
    'Tu solidaridad es un regalo invaluable para los valientes niños que enfrentan la batalla contra el cáncer.',
    'Con gratitud, reconocemos tu compasión y dedicación para mejorar la vida de los pequeños guerreros.',
    'Gracias por ser parte de nuestra misión de proporcionar esperanza y fuerza a los niños y sus familias.',
    'Estamos agradecidos por cada acto de bondad que ayuda a aliviar el dolor de los niños afectados por el cáncer.',
    'Tu apoyo constante es un faro de esperanza en el viaje de aquellos que enfrentan desafíos tan grandes.',
    'Con aprecio, reconocemos tu compromiso con la causa de mejorar la calidad de vida de los niños con cáncer.',
    'Agradecemos tu generosidad, que permite que nuestros pequeños héroes encuentren momentos de alegría en medio de la adversidad.',
    'Tu contribución es un testimonio del amor y la empatía que existe en el corazón humano.',
    'Gracias por ser un ángel que vela por el bienestar de los más pequeños en su lucha contra el cáncer.',
    'Estamos agradecidos por cada sonrisa que tu apoyo ha traído a los rostros de los niños que atendemos.',
    'Tu compromiso nos inspira a continuar trabajando por un futuro más brillante para los niños afectados por el cáncer',
    'Agradecemos tu corazón compasivo, que toca las vidas de aquellos que enfrentan batallas difíciles.',
    'Gracias por ser un rayo de esperanza en la vida de los niños y sus familias mientras enfrentan el cáncer.',
    'Reconocemos y agradecemos tu papel crucial en la mejora de la vida de los niños que luchan valientemente contra el cáncer.',
    'Tu apoyo incondicional es una bendición para los pequeños valientes que enfrentan esta enfermedad.',
    'Agradecemos tu generosidad que permite ofrecer tratamientos innovadores y atención personalizada.',
    'Con gratitud, valoramos tu participación activa en hacer posible nuestra misión de ayudar a los niños con cáncer.',
    'Tu contribución es una fuente de fortaleza para los niños y sus familias que enfrentan desafíos inimaginables.',
    'Agradecemos tu compromiso continuo de hacer del mundo un lugar mejor para los niños afectados por el cáncer.',
    'Gracias por ser parte de nuestra familia solidaria, brindando esperanza a cada niño que lucha contra el cáncer.',
];

function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

function agregarDonacion(donacion) {
    const imagenAleatoria = obtenerElementoAleatorio(imagenesArray);
    const fraseAleatoria = obtenerElementoAleatorio(frases);

    var cardHtml = `
<div style="border-radius: 25px" class="card col-md-3 mb-5">
    <div class="card-container">
        <img src="${imagenMarco}" class="card-marco" alt="Marco">
        <img src="${imagenAleatoria}" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Donaciones</h5>
            <p class="card-text">${fraseAleatoria}</p>
        </div>
    </div>
    <ul class="list-group list-group-flush text-light">
        <li class="list-group-item">ID: ${donacion.id}</li>
        <li class="list-group-item">Donación: ${donacion.donacion}</li>
        <li class="list-group-item">Cantidad: ${donacion.cantidad}</li>
        <li class="list-group-item">Tipo donación: ${donacion.tipoDonacion}</li>
        <li class="list-group-item">Fecha de Donación: ${donacion.fechaDonado}</li>
        <li class="list-group-item">Estado de donación: ${donacion.estado}</li>
    </ul>
</div>
`;

    // Agregar la card al contenedor
    document.getElementById('donaciones-list').innerHTML += cardHtml;
}

// Ejemplo: Agregar donaciones al cargar la página
donaciones.forEach(agregarDonacion);

// Paginación
const itemsPerPage = 6;
const totalPages = Math.ceil(donaciones.length / itemsPerPage);

const paginationElement = document.getElementById('pagination');
for (let i = 1; i <= totalPages; i++) {
    paginationElement.innerHTML += `<li class="page-item"><a class="page-link" href="#" onclick="mostrarPagina(${i})">${i}</a></li>`;
}

function mostrarPagina(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const donacionesPagina = donaciones.slice(startIndex, endIndex);

    // Limpiar el contenedor antes de agregar las nuevas donaciones
    document.getElementById('donaciones-list').innerHTML = "";

    // Agregar las donaciones de la página actual
    donacionesPagina.forEach(agregarDonacion);
}

mostrarPagina(1);


document.addEventListener("DOMContentLoaded", function () {
    const btnAbrirModal = document.querySelector("#btn-abrir-modal");
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
    const modal = document.querySelector("#modal");


    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });


    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });
});

function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);

    // Obtén las filas de la tabla
    var rows = tableSelect.getElementsByTagName('tr');

    // Crear un objeto HTML para almacenar solo las columnas deseadas
    var filteredTable = document.createElement('table');

    // Agregar encabezados a la nueva tabla
    var headerRow = filteredTable.createTHead().insertRow(0);
    headerRow.innerHTML = "<th>ID</th><th>Servicio</th><th>Categoria</th><th>Fecha de registro</th><th>Disponibilidad</th>";

    // Recorrer las filas de la tabla original y copiar solo las columnas deseadas a la nueva tabla
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        if (cells.length >= 5) { // Asegurarse de que haya al menos 5 celdas (las columnas deseadas)
            var newRow = filteredTable.insertRow(-1);
            for (var j = 0; j < 5; j++) { // Copiar solo las primeras 5 celdas (las columnas deseadas)
                var newCell = newRow.insertCell(j);
                newCell.innerHTML = cells[j].innerHTML;
            }
        }
    }

    // Convertir la nueva tabla a HTML
    var tableHTML = filteredTable.outerHTML.replace(/ /g, '%20');

    // Especificar el nombre de archivo
    filename = filename ? filename + '.xls' : 'tabla_servicios.xls';

    // Crear el elemento de enlace de descarga
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Crear un enlace al archivo
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Establecer el nombre de archivo
        downloadLink.download = filename;

        // Activar la función
        downloadLink.click();
    }
}


function validarFormulario() {
    // Obtener el valor del campo nombre
    var valorTipo = document.getElementById("tipoDonacion").value;


    // Verificar si el campo nombre está lleno
    if (valorTipo === "") {
        // Si no está lleno, mostrar un mensaje de error y evitar enviar el formulario
        alert("Por favor seleccione algún tipo de donación");
        return false;
    }


    // Si todos los campos están llenos, mostrar el mensaje de guardado exitoso
    guardadoExitoso();
    return true;
}

function guardadoExitosoModal(e) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Su donación se ha registrado con exito",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {

            cerrarModal();
    });
}

function cerrarModal() {
    // Simula el clic en el botón con data-dismiss
    document.getElementById('verticalModal').click();
}

$(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });
    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });
});

const formulario = document.getElementById('form')
const text = document.getElementById('text')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const datetime = document.getElementById('datetime')
const textarea = document.getElementById('textarea')
const select = document.getElementById('select')

const fechaHoraActual = new Date().toISOString().slice(0, 16);
datetime.value = fechaHoraActual


formulario.addEventListener('submit', e => {
    e.preventDefault()


    validateInputs()
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = elemento => {
    const inputControl = elemento.parentElement
    const errorDisplay = inputControl.querySelector('.error')


    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}


const validarCorreo = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validarContraseña = pass => {
    const re = /^.{8,}$/
    return re.test(pass)
}


const validarTexto = text => {
    const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
    return re.test(String(text))
}


const validateInputs = () => {
    const textValue = text.value.trim()
    const emailValue = email.value.trim()
    const passValue = pass.value.trim()
    const textareaValue = textarea.value.trim()
    const selectValue = select.value.trim()


    if (textValue === "") {
        setError(text, 'No puedes dejar este campo vacio.')
    } else if (!validarTexto(textValue)) {
        setError(text, 'No se permiten caracteres especiales.')
    } else {
        setSuccess(text)
    }


    if (emailValue === "") {
        setError(email, 'El campo correo electrónico debe de ser llenado.')
    } else if (!validarCorreo(emailValue)) {
        setError(email, 'Ingresa un correo electrónico valido.')
    } else {
        setSuccess(email)
    }


    if (passValue === "") {
        setError(pass, 'El campo contraseña debe de ser llenado.')
    } else if (!validarContraseña(passValue)) {
        setError(pass, 'La contraseña debe de tener al menos 8 caracteres.')
    } else {
        setSuccess(pass)
    }


    if (textareaValue === "") {
        setError(textarea, 'No puedes dejar este campo vacio')
    } else {
        setSuccess(textarea)
    }


    if (selectValue === "seleccionar") {
        setError(select, 'Debes de seleccionar una opción valida')
    } else {
        setSuccess(select)
    }


}

function mostrarFormulario() {
    var tipoFormulario = document.getElementById("select").value;

    // Ocultar todos los formularios
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";


    // Mostrar el formulario seleccionado
    document.getElementById(tipoFormulario).style.display = "block";
}

function mostrarFormulario2() {
    var tipoFormulario2 = document.getElementById("tipoFormulario2").value;

    // Ocultar todos los formularios
    document.getElementById("1.1").style.display = "none";
    document.getElementById("1.2").style.display = "none";
    document.getElementById("1.3").style.display = "none";

    // Mostrar el formulario seleccionado
    document.getElementById(tipoFormulario2).style.display = "block";
}

function validarDinero(valor) {
    var patron = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/; // Expresión regular para dinero

    var mensajeError = document.getElementById("mensajeError");

    if (patron.test(valor)) {
        // La entrada es válida
        mensajeError.textContent = "";
    } else {
        // La entrada no es válida
        mensajeError.textContent = "Formato de dinero no válido. Por favor, ingrese un monto válido.";
    }
}

function agregarProducto() {
    var nombre = document.getElementById("nombreAlimento").value;
    var cantidad = document.getElementById("cantidadAlimento").value;
    var unidadMedida = document.getElementById("gramajeAlimento").value;

    if (nombre.trim() === "" || cantidad < 1 || unidadMedida === "unidad") {
        alert("Por favor, ingrese un nombre, una cantidad y una unidad de medida válidos.");
        return;
    }

    var nuevoElemento = document.createElement("tr");
    nuevoElemento.innerHTML = `
        <td>${nombre}</td>
        <td>${cantidad} ${unidadMedida}</td>
        <td><a onclick="eliminarProducto(this)" id="botonEliminar"><i class="fa fa-times"></i></a></td>
  `;

    document.getElementById("listaProductos").appendChild(nuevoElemento);

    document.getElementById("nombreProducto").value = "";
    document.getElementById("cantidadProducto").value = "";
    document.getElementById("unidadMedidaProducto").value = "";
}

function agregarMedicamento() {
    var nombre = document.getElementById("nombreMedicamento").value;
    var cantidad = document.getElementById("cantidadMedicamento").value;
    var unidadMedida = document.getElementById("unidadMedidaMedicamento").value;
    var gramaje = document.getElementById("gramajeMedicamento").value;

    // Validación de campos
    if (nombre.trim() === "" || cantidad < 1 || unidadMedida === "unidad" || gramaje.trim() === "") {
        alert("Por favor, ingrese un nombre, una cantidad, un gramaje y una unidad de medida válidos.");
        return;
    }

    var nuevoElemento = document.createElement("tr");
    nuevoElemento.innerHTML = `
    <td>${nombre}</td>
    <td>${cantidad} ${unidadMedida}</td>
    <td>${gramaje}</td>
    <td><a onclick="eliminarMedicamento(this)" id="botonEliminar"><i class="fa fa-times"></i></a></td>
  `;

    document.getElementById("listaMedicamentos").appendChild(nuevoElemento);

    // Limpiar los campos después de agregar el medicamento
    document.getElementById("nombreMedicamento").value = "";
    document.getElementById("cantidadMedicamento").value = "";
    document.getElementById("unidadMedidaMedicamento").value = "unidad";
    document.getElementById("gramajeMedicamento").value = "";
}


function eliminarProducto(botonEliminar) {
    var fila = botonEliminar.closest("tr");
    fila.parentNode.removeChild(fila);
}

function eliminarMedicamento(botonEliminar) {
    var fila = botonEliminar.closest("tr");
    fila.parentNode.removeChild(fila);
}

function subirArchivo() {
    var inputFile = document.getElementById('archivo');
    var mensajeDiv = document.getElementById('mensaje');

    // Verificar si se seleccionó un archivo
    if (inputFile.files.length === 0) {
        mensajeDiv.innerHTML = 'Por favor, selecciona un archivo.';
        return;
    }

    var archivo = inputFile.files[0];
    var formData = new FormData();
    formData.append('archivo', archivo);

    // Aquí puedes realizar una solicitud AJAX para enviar el archivo al servidor
    // Por ejemplo, usando fetch o XMLHttpRequest

    // Ejemplo con fetch:
    fetch('/tu/servidor/endpoint', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            mensajeDiv.innerHTML = data.mensaje; // Puedes ajustar esto según la respuesta del servidor
        })
        .catch(error => {
            console.error('Error al subir el archivo:', error);
            mensajeDiv.innerHTML = 'Hubo un error al subir el archivo.';
        });
}

var stripe = Stripe('tu_clave_publica');
var elements = stripe.elements();

var card = elements.create('card');
card.mount('#card-element');

var form = document.getElementById('payment-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar campos antes de enviar la información a Stripe
    var nombre = document.getElementById('nombre').value.trim();
    var expiracion = document.getElementById('expiracion').value.trim();
    var cvc = document.getElementById('cvc').value.trim();

    if (!nombre || !expiracion || !cvc) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    stripe.createToken(card).then(function (result) {
        if (result.error) {
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            stripeTokenHandler(result.token, nombre);
        }
    });
});

function stripeTokenHandler(token, nombre) {
    fetch('/tu/servidor/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token.id, nombre: nombre }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Pago exitoso');
        })
        .catch(error => {
            console.error('Error al procesar el pago:', error);
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = 'Hubo un error al procesar el pago.';
        });
}

const campos = {


    cantidadProducto: false,
    card: false,
    expiracionCard: false,
    cvc: false,
    nombreAlimento: false,
    cantidadAlimento: false,
    contenidoViaje: false,
    contenidoTerapia: false,
    nombreMedicamento: false,
    cantidadMedicamento: false
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.cantidadProducto && campos.card && campos.expiracionCard && campos.cvc && campos.nombreAlimento && campos.cantidadAlimento && campos.contenidoViaje && campos.contenidoTerapia && campos.nombreMedicamento && campos.cantidadMedicamento) {
        formulario.reset();


        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});

const regexes = {
    "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
    "MasterCard": /^5[1-5][0-9]{14}$/,
    "American Express": /^3[47][0-9]{13}$/,
    "Discover": /^6[0-9]{15}$/,
    "JCB": /^2131[0-9]{11}|^1800[0-9]{11}|^35[0-9]{15}$/,
};

function validarNumeroTarjeta(numeroTarjeta, marca) {
    const regex = regexes[marca];
    return regex ? regex.test(numeroTarjeta) : false;
}

const numeroTarjeta = document.getElementById("numeroTarjeta").value;
const marca = "MasterCard";

if (validarNumeroTarjeta(numeroTarjeta, marca)) {
    // El número de tarjeta es válido
} else {
    alert("El número de tarjeta no es válido")
}

function validateForm() {
    // Lógica de validación para cada campo
    var isValid = true;

    // Validación para el campo de cantidad en el formulario de Dinero
    var cantidadDinero = document.getElementById('CantidadDinero').value;
    var cantidadDineroError = document.getElementById('cantidadDineroError');
    if (cantidadDinero === '' || isNaN(cantidadDinero) || cantidadDinero <= 0) {
        cantidadDineroError.innerHTML = 'Por favor, ingrese una cantidad válida.';
        isValid = false;
    } else {
        cantidadDineroError.innerHTML = '';
    }

    // Otros campos y validaciones según tus necesidades

    if (isValid) {
        alert('Formulario válido. Puedes enviar los datos.');
        // Aquí puedes enviar los datos del formulario si es válido
    }
}