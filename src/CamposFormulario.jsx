const CamposFormulario = ({ label, name, type, placeholder }) => {
  return (
    <div className="campo">
      <label>{label}</label>

      {name === "sintomas" && (
        <textarea 
          name={name} 
          className="u-full-width" 
        />
      )}

      {name !== "sintomas" && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="u-full-width"
        />
      )}
    </div>
  );
};

export default CamposFormulario;