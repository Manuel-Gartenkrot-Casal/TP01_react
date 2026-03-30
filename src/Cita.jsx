import './Cita.css'

const citas = [
  {
    mascota: "Nina",
    dueno: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  },
  {
    mascota: "Sifon",
    dueno: "Flecha",
    fecha: "2023-08-05",
    hora: "09:24",
    sintomas: "Duerme mucho"
  },
  {
    mascota: "Floki",
    dueno: "Ari",
    fecha: "2023-08-05",
    hora: "16:15",
    sintomas: "No está comiendo"
  }
];

function Cita() {
  return (
    <div>
        <h1 class= "titulo">Administrá tus citas</h1>
      {citas.map((cita) => (
        <div className="cita" key={cita.mascota}>
          <p>Mascota: {cita.mascota}</p>
          <p>Dueño: {cita.dueno}</p>
          <p>Fecha: {cita.fecha}</p>
          <p>Hora: {cita.hora}</p>
          <p>Síntomas: {cita.sintomas}</p>
          <button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
      ))}

    </div>
  );
}

export default Cita;