import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Covid from './components/Covid';
import './App.css';

function App() {
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://covid19-brazil-api.now.sh/api/report/v1')
      .then((res) => {
        setStates(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredStates = states.filter((state) =>
    state.state.toLowerCase().includes(search.toLowerCase()),
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="covid-app">
      <div className="covid-search">
        <h1 className="covid-text">Procure o Estado:</h1>
        <form>
          <input
            type="text"
            placeholder="Digite o nome do estado"
            className="covid-input"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="covid-card">
        {filteredStates.map((state) => {
          return (
            <Covid
              key={state.uf}
              state={state.state}
              cases={state.cases}
              deaths={state.deaths}
              refuses={state.refuses}
              suspects={state.suspects}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
