
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



    const asignarEventos = (): void =>{
        inputEmail.addEventListener('blur',(evt: Event) => {
            evt.preventDefault();
            console.log((evt.target as HTMLInputElement).value);
        });
    };

    seleccionarElementosInterface();
    asignarEventos();
});