import React from 'react';

import '../styles/Covid.css';

const Covid = ({ cases, deaths, refuses, suspects, state }) => {
  return (
    <div className="covid-container">
      <div className="covid-row">
        <div className="covid">
          <h1 className="state">{state} </h1>
          <p className="cases">Casos: {cases}</p>
          <p className="deaths">Mortes: {deaths}</p>
          <p className="refuses">Recuperados: {refuses}</p>
          <p className="suspects">Suspeitos: {suspects}</p>
        </div>
      </div>
    </div>
  );
};

export default Covid;
