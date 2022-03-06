import './App.css';
import Pokemon from "./components/Pokemon.jsx";
import React,{useState} from "react";
import styles from "./components/Pokemon.module.css";

function App(){

  const[name, setName] = useState('Pikachu');

  return(
  <div>
    <Pokemon name={name}/>
    <button className={`${styles.blue}`} onClick={()=> setName("Sylveon")}>
    Modificar
    </button>
  </div>
  )
}

export default App;