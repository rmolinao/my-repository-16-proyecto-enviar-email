
document.addEventListener("DOMContentLoaded", () => {
    interface Email {
        email: string;
        asunto: string;
        mensaje: string;
    }

    const Email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    let inputEmail: HTMLInputElement;
    let inputAsunto: HTMLInputElement;
    let inputMensaje: HTMLTextAreaElement;
    let formulario: HTMLFormElement;

    const seleccionarElementosInterface = (): void => {
        inputEmail = <HTMLInputElement>document.getElementById('email');
        inputAsunto = <HTMLInputElement>document.getElementById('asunto');
        inputMensaje = <HTMLTextAreaElement>document.getElementById('mensaje');
        formulario = <HTMLFormElement>document.getElementById('formulario');
    };

    const mostrarAlerta = (mensage:string, referencia:HTMLElement): void => {

        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }

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

    const validar = (evt: Event): void => {
        evt.preventDefault();
        const targetElement = <HTMLInputElement|HTMLTextAreaElement>  evt.target;
        console.log(targetElement);
        if (targetElement.value.trim() === '') {
            mostrarAlerta(`El campo ${targetElement.id} es obligatorio`,targetElement.parentElement!);
        }
        // else {console.log((evt.target as HTMLInputElement).value);}
    };

    const asignarEventos = (): void => {
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
    };

    seleccionarElementosInterface();
    asignarEventos();
});