
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
    let btnSubmit: HTMLButtonElement;
    let btnRest: HTMLButtonElement;
    let formulario: HTMLFormElement;
    let spinner: HTMLDivElement;

    const seleccionarElementosInterface = (): void => {
        inputEmail = <HTMLInputElement>document.getElementById('email');
        inputAsunto = <HTMLInputElement>document.getElementById('asunto');
        inputMensaje = <HTMLTextAreaElement>document.getElementById('mensaje');
        formulario = <HTMLFormElement>document.getElementById('formulario');
        spinner = <HTMLDivElement>document.getElementById('spinner');
        btnSubmit = <HTMLButtonElement>document.querySelector('#formulario button[type="submit"]');
        btnRest = <HTMLButtonElement>document.querySelector('#formulario button[type="reset"]');
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

    const comprobarEmail = (): void => {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    };
    const resetFromulario =(): void => {
        for (let attribute in email)
                email [<keyof Email> attribute] ='';
            formulario.reset();
            comprobarEmail();
    }

    const validarEmail = (email: string): boolean => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    };

    const validar = (evt: Event): void => {
        evt.preventDefault();
        const targetElement = <HTMLInputElement | HTMLTextAreaElement>evt.target;
        if (targetElement.value.trim() === '') {
            mostrarAlerta(`El campo ${targetElement.id} es obligatorio`, targetElement.parentElement!);
            email[<keyof Email>targetElement.name] = '';
            comprobarEmail();
            return;
        }
        if (targetElement.id === 'email' && !validarEmail(targetElement.value)) {
            mostrarAlerta('El email no es valido', targetElement.parentElement!);
            email[<keyof Email>targetElement.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(targetElement.parentElement!);
        email[<keyof Email>targetElement.id] = targetElement.value.trim().toLowerCase();
        comprobarEmail();
    };
    const enviarFormulario = (evt :Event):void => {
        evt.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFromulario();
        }
        ,5000);

    }

    const asignarEventos = (): void => {
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
        formulario.addEventListener('submit',enviarFormulario)
        btnRest.addEventListener('click', (evt:Event) => {
            evt.preventDefault();
            resetFromulario();
        });
    };

    seleccionarElementosInterface();
    asignarEventos();
});