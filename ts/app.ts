
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

    let inputEmail:HTMLInputElement;
    let inputAsunto:HTMLInputElement;
    let inputMensaje:HTMLTextAreaElement;

    const seleccionarElementosInterface = (): void => {
        inputEmail = <HTMLInputElement> document.getElementById('email') ;
        inputAsunto = <HTMLInputElement> document.getElementById('asunto')  ;
        inputMensaje = <HTMLTextAreaElement> document.getElementById('mensaje');
    };

    const validar = (evt: Event):void =>{
        evt.preventDefault();
        console.log((evt.target as HTMLInputElement).value);
    };

    const asignarEventos = (): void => {
        inputEmail.addEventListener('blur',validar);
        inputAsunto.addEventListener('blur',validar);
        inputMensaje.addEventListener('blur',validar);
    };

    seleccionarElementosInterface();
    asignarEventos();
});