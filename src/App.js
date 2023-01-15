import './App.css';

function App() {
  const name = 'Pablo';
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b;
  }

  const url = 'http://via.dddjj.com/150'
  return (
    <div className='App'>
      <h1>Ola React</h1>
      <p>ola, {newName} </p>
      <p>{sum(1,1)}</p>
      <img src={url} alt="mi imagen" />
    </div>
  )
}

export default App;
