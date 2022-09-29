import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import SandwichOverview from "./components/SandwichOverview";
import CreateSandwich from "./components/CreateSandwich";
import {Sandwich} from "./model/Sandwich";
import {HashRouter, Route, Routes} from "react-router-dom";
import SandwichDetails from "./components/SandwichDetails";

function App() {
  // Creates a state "sandwiches" and gives us a method to change/set it
  const [sandwiches, setSandwiches] = useState([]);

  // Load Todos from backend
  useEffect ( () => {
    loadSandwiches()

  } , [] ) // empty dependency array = execute only when website was rendered the first time

  const loadSandwiches = () => {
    axios.get("/api/sandwich/")
        .then((response) => response.data)
        .then((sandwiches) => setSandwiches(sandwiches))
  }

  const addSandwich = (newSandwich: Sandwich) => {
    // We use .then here to reload the sandwiches only when the get is done
    axios.post("/api/sandwich", newSandwich)
        .then(loadSandwiches) // reload sandwiches from backend
  }

  const deleteSandwich = (id: string) => {

    axios.delete("/api/sandwich/" + id)
        .then(loadSandwiches) // reload sandwiches from backend
  }

  let isOrdered:boolean = sandwiches.length>0;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bestellungen</h1>
        {
          isOrdered ?
              <HashRouter>
                <Routes>
                  <Route path={"/"} element={
                    <div>
                      <SandwichOverview sandwiches={sandwiches} deleteSandwich={deleteSandwich} />
                      <CreateSandwich addSandwich={addSandwich} />
                    </div>

                  }/>
                  <Route path={"/:id"} element={<SandwichDetails sandwiches={sandwiches}/>}/>
                </Routes>
              </HashRouter>
              :
              <div>
                <p> Bitte stellen Sie eine Bestellung auf:</p>
                <CreateSandwich addSandwich={addSandwich} />
              </div>
        }
      </header>
    </div>
  );
}

export default App;
