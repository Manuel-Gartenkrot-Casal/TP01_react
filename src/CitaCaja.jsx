const CitaCaja = ({ cita }) => {
    const { mascota, dueno, fecha, hora, sintomas } = cita

    return (
        <div className="cita">
            <p>Mascota: {mascota}</p>
            <p>Dueño: {dueno}</p>
            <p>Fecha: {fecha}</p>
            <p>Hora: {hora}</p>
            <p>Síntomas: {sintomas}</p>
            <button
                className="button elimnar u-full-width"
            >
                Eliminar ×
            </button>
        </div>
    );
};

export default CitaCaja;