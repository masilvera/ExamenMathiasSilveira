import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length <= 5) {
      setError("Nombre completo debe tener más de 5 caracteres");
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Formato de email incorrecto");
    } else {
      // Lógica de éxito
      setError("");
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos pronto vía email`);
      // Puedes mostrar los datos submiteados en la consola
      console.log("Datos submiteados:", formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar mensaje de error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Mostrar mensaje de éxito */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
