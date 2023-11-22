
document.addEventListener("DOMContentLoaded", () => {
    interface Email {
        email: string;
        asunto: string;
        mensaje: string;
    };

    const email: Email = {
        email: '',
        asunto: '',
        mensaje: ''
    };

    let inputEmail: HTMLInputElement;
    let inputAsunto: HTMLInputElement;
    let inputMensaje: HTMLTextAreaElement;

    const seleccionarElementosInterface = (): void => {
        inputEmail = <HTMLInputElement>document.getElementById('email');
        inputAsunto = <HTMLInputElement>document.getElementById('asunto');
        inputMensaje = <HTMLTextAreaElement>document.getElementById('mensaje');
    };

    const mostrarAlerta = (mensage: string, referencia: HTMLElement): void => {

        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.classList.add(
            'bg-red-600',
            'text-white',
            'p-2',
            'text-center'
        );
        error.textContent = mensage;
        referencia.appendChild(error);

    };

    const limpiarAlerta = (referencia: HTMLElement): void => {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    };
    const comprobarEmail = (): boolean => {
        // const valores = Object.keys(email).map(key => email[<keyof Email> key]);
        // return valores.some( value => value == '');
        return Object.values(email).includes('')//todo lo anterior se simplifica de esta forma;
    };
    const validarEmail = (email: string): boolean => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    };

    const validar = (evt: Event): void => {
        evt.preventDefault();
        const targetElement = <HTMLInputElement | HTMLTextAreaElement>evt.target;
        if (targetElement.value.trim() === '') {
            mostrarAlerta(`El campo ${targetElement.id} es obligatorio`, targetElement.parentElement!);
            return;
        }
        if (targetElement.id === 'email' && !validarEmail(targetElement.value)) {
            mostrarAlerta('El email no es valido', targetElement.parentElement!);
            return;
        }
        limpiarAlerta(targetElement.parentElement!);
        email[<keyof Email>targetElement.id] = targetElement.value.trim().toLowerCase();
        comprobarEmail();

    };

    const asignarEventos = (): void => {
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
    };

    seleccionarElementosInterface();
    asignarEventos();
});