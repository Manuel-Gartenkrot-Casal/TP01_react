const CamposFormulario = ({ label, name, type, placeholder }) => {
  const esSintomas = name === "sintomas";
  return (
    <div className="campo">
      <label>{label}</label>

      {esSintomas && (
        <textarea 
          name={name} 
          className="u-full-width" 
        />
      )}

      {!esSintomas && (
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