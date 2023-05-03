import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  //to set country
  const [countries, setCountries] = useState([])

  //to get data from api
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h3>welcome to rest countries react</h3>
      <h4>available countries:{countries.length}</h4>
      {
        //normal function
        countries.map(country => <DisplayCountries name={country.name.common} population={country.population}></DisplayCountries>)
        //arrow function
        //countries.map(country => displayCountries(country))
      }
    </div>
  )
}
// normal function
function DisplayCountries(props) {
  return (
    <div>
      <h2>name:{props.name}</h2>
      <h4>Population:{props.population}</h4>
    </div>
  )
}
//arrow function
// const displayCountries = (props) => {
//   return (
//     <div>
//       <h2>name:{props.name.common}</h2>
//     </div>
//   )
// }

export default App;
