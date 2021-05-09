import React from 'react';
import './Covid.css';

const Covid = ({ cases, deaths, refuses, suspects, state }) => {
  return (
    <div className="covid-container">
      <div className="covid-state">
        <h1>{state}</h1>
        <p>Casos: {cases}</p>
        <p>Mortes: {deaths}</p>
        <p>Recuperados: {refuses}</p>
        <p>Suspeitos: {suspects}</p>
      </div>
    </div>
  );
};

export default Covid;
