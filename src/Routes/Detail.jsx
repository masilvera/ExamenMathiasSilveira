import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCharContext } from '../utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useCharContext();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentistDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentistDetails();
  }, [id]);

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`detail-container ${themeClass}`}>
      {dentist ? (
        <>
          <h1>Detail Dentist ID {id}</h1>
          <div>
            <p>Name: {dentist.name}</p>
            <p>Email: {dentist.email}</p>
            <p>Phone: {dentist.phone}</p>
            <p>Website: {dentist.website}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
