import './Cita.css'
import CitaCaja from "./CitaCaja";

const Cita = ({ citas }) => {
  return (
    <div className="lista-citas">
      {citas.map((cita) => (
        <CitaCaja 
          key={cita.mascota} 
          cita={cita} 
        />
      ))}
    </div>
  );
};

export default Cita;