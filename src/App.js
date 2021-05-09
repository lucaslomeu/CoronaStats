import './App.css';

function fetchData() {
  const url = 'https://covid19-brazil-api.now.sh/api/report/v1';

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data[0]);
      // document.getElementById('uf').innerHTML = data.data[0];
    });
}

fetchData();

function App() {
  return (
    <div className="App">
      <h1>COVID</h1>
      <div className="estado">SP</div>
    </div>
  );
}

export default App;
