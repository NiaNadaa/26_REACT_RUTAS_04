import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './App.css';

import Main from "./Main"

function App() {
  let players = [
    {
    nombre: "Lebron James",
    altura: "209 Cm",
    peso: "113 Kg",
    posicion: "Alero"
    },
    {
    nombre: "Anthony Davis",
    altura: "208 Cm",
    peso: "115 Kg",
    posicion: "Pívot"
    },
    {
    nombre: "Luca Doncic",
    altura: "201 Cm",
    peso: "104 Kg",
    posicion: "Base"
    },
    {
    nombre: "Zion Williamson",
    altura: "198 Cm",
    peso: "129 Kg",
    posicion: "Pívot"
    },
    {
    nombre: "James Harden",
    altura: "196 Cm",
    peso: "100 Kg",
    posicion: "Base"
    },
    ]
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/equipo" element={<Main players={players}/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
