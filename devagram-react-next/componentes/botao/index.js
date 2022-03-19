export default function Botao ({
    tipo = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularClique
}) {
    return (
        <button
            type={tipo}
            disabled={desabilitado}
            className={`btn ${cor}`}
            onClick={manipularClique}
        >
            {texto}
        </button>
    );
};