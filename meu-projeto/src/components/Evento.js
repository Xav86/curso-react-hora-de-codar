import Button from "./evento/Button";

function Evento() {
    
    function meuEvento() {
        console.log(`Ativando Evento!!!`);
    }

    function segundoEvento() {
        console.log(`ATIVANDO OUTRO EVENTO!!!`)
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento