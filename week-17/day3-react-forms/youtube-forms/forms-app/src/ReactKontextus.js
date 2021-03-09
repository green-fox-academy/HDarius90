import {useState} from 'react';
import React from 'react'

const szotar = {
    hun: {
      greetings: "Üdvözlet",
      changeLanguage: "Válassz nyelvet",
      content: "Ebben az epizódban a React context használatáról lesz szó.",
      goodLuck: "Sok sikert!",
      hungarian: "Magyar",
      english: "Angol",
      spanish: "Spanyol",
    },
    en: {
      greetings: "Greetings",
      changeLanguage: "Choose language",
      content: "In this episode we will discuss the use of React context.",
      goodLuck: "Good Luck!",
      hungarian: "Hungarian",
      english: "English",
      spanish: "Spanish",
    },
    spa: {
      greetings: "Saludos",
      changeLanguage: "Elige lengua",
      content: "En este episodio discutiremos el uso del contexto React",
      goodLuck: "Buena suerte!",
      hungarian: "Húngaro",
      english: "Inglés",
      spanish: "Español",
    },
  };
  
  const NyelvKontextus = React.createContext();
  export default function App() {
    const [nyelv, setNyelv] = useState("hun"); // "hun" | "en" | "spa"
  
    return (
      <NyelvKontextus.Provider value={nyelv}>
        <NyelvValaszto setNyelv={setNyelv} />
        <Kontener />
      </NyelvKontextus.Provider>
    );
  }
  
  function Kontener() {
    return (
      <div className="container-fluid">
        <Keret />
      </div>
    );
  }
  
  function Keret() {
    return (
      <div className="border p-5 bg-secondary">
        <div className="row">
          <Udvozles />
          <Tartalom />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
  
  function Udvozles() {
    const nyelv = React.useContext(NyelvKontextus);
    return (
      <div className="col-6 bg-warning jumbotron m-0 rounded-0">
        <h1>{szotar[nyelv].greetings}!</h1>
      </div>
    );
  }
  
  function Tartalom() {
    const nyelv = React.useContext(NyelvKontextus);
    return (
      <div className="col-6 bg-danger jumbotron m-0 rounded-0">
        <h1>{szotar[nyelv].content}</h1>
      </div>
    );
  }
  
  function Footer() {
    const nyelv = React.useContext(NyelvKontextus);
    return (
      <div className="col-12 bg-dark jumbotron rounded-0 text-light">
        <h1>{szotar[nyelv].goodLuck}</h1>
      </div>
    );
  }
  
  function NyelvValaszto({ setNyelv }) {
    const nyelv = React.useContext(NyelvKontextus);
    return (
      <nav className="navbar navbar-light bg-light p-0">
        <label className="w-100 p-3">
          <h3>{szotar[nyelv].changeLanguage}:</h3>
          <select
            className="form-control"
            defaultValue={nyelv}
            onChange={(e) => {
              setNyelv(e.target.value);
            }}
          >
            <option value="hun">{szotar[nyelv].hungarian}</option>
            <option value="en"> {szotar[nyelv].english}</option>
            <option value="spa"> {szotar[nyelv].spanish}</option>
          </select>
        </label>
      </nav>
    );
  }