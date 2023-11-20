
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

    const seleccionarElementosInterface = (): void => {

        const inputEmail = <HTMLInputElement> document.getElementById('email') ;
        const inputAsunto = <HTMLInputElement> document.getElementById('asunto')  ;
        const inputMensaje = <HTMLTextAreaElement> document.getElementById('mensaje');
    };

    seleccionarElementosInterface();

});