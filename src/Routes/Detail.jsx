import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context"; // Ajustar la ruta según tu estructura

const Detail = () => {
  const { id } = useParams(); // Obtener el ID del dentista desde la URL
  const { state } = useContext(ContextGlobal); // Obtener el tema actual
  const [dentist, setDentist] = useState(null); // Estado local para almacenar los datos del dentista

  // Hacer fetch a la API para obtener los datos del dentista
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };
    fetchDentist();
  }, [id]);

  return (
    <main className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <h1>Detail Dentist {id}</h1>
      {dentist ? (
        <div className="dentist-details">
          <h2>{dentist.name}</h2>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </div>
      ) : (
        <p>Loading dentist details...</p>
      )}
    </main>
  );
};

export default Detail;
