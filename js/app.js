"use strict";
document.addEventListener("DOMContentLoaded", function () {
    ;
    var email = {
        email: '',
        asunto: '',
        mensaje: ''
    };
    var inputEmail;
    var inputAsunto;
    var inputMensaje;
    var btnSubmit;
    var btnRest;
    var formulario;
    var spinner;
    var seleccionarElementosInterface = function () {
        inputEmail = document.getElementById('email');
        inputAsunto = document.getElementById('asunto');
        inputMensaje = document.getElementById('mensaje');
        formulario = document.getElementById('formulario');
        spinner = document.getElementById('spinner');
        btnSubmit = document.querySelector('#formulario button[type="submit"]');
        btnRest = document.querySelector('#formulario button[type="reset"]');
    };
    var mostrarAlerta = function (mensage, referencia) {
        limpiarAlerta(referencia);
        var error = document.createElement('P');
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        error.textContent = mensage;
        referencia.appendChild(error);
    };
    var limpiarAlerta = function (referencia) {
        var alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    };
    var comprobarEmail = function () {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    };
    var resetFromulario = function () {
        for (var attribute in email)
            email[attribute] = '';
        formulario.reset();
        comprobarEmail();
    };
    var validarEmail = function (email) {
        var regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    };
    var validar = function (evt) {
        evt.preventDefault();
        var targetElement = evt.target;
        if (targetElement.value.trim() === '') {
            mostrarAlerta("El campo ".concat(targetElement.id, " es obligatorio"), targetElement.parentElement);
            email[targetElement.name] = '';
            comprobarEmail();
            return;
        }
        if (targetElement.id === 'email' && !validarEmail(targetElement.value)) {
            mostrarAlerta('El email no es valido', targetElement.parentElement);
            email[targetElement.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(targetElement.parentElement);
        email[targetElement.id] = targetElement.value.trim().toLowerCase();
        comprobarEmail();
    };
    var enviarFormulario = function (evt) {
        evt.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        setTimeout(function () {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFromulario();
            crearAlerte();
        }, 3000);
    };
    var crearAlerte = function () {
        var alertaExito = document.createElement('P');
        alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
        alertaExito.textContent = 'Mensaje enviado correctamente';
        formulario.appendChild(alertaExito);
        setTimeout(function () {
            alertaExito.remove();
        }, 3000);
    };
    var asignarEventos = function () {
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
        formulario.addEventListener('submit', enviarFormulario);
        btnRest.addEventListener('click', function (evt) {
            evt.preventDefault();
            resetFromulario();
        });
    };
    seleccionarElementosInterface();
    asignarEventos();
});
