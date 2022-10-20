import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
  const [sushis, setSushis] = useState([])

  // useEffect(() => {
  //   fetch(API)
  //   .then(r => r.json())
  //   .then((sushis) => setSushis(sushis))
  // }, [])

  //IN ORDER to modify the db.json when the page renders to
  //have all sushis have the beginning state of eaten: false, we
  //make an UPDATE to our FETCH request...VVVVV


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((sushis) => {
      const newSushi = sushis.map((sushi) => {
        return { ...sushi, eaten: false }
      })
      setSushis(newSushi)
    });
  }, [])

  //We add the key:value to each sushi as it's fetched


  function handleEatenSushi(eatenSushi) {
    const sushiRemaining = sushis.map((sushi) => {
      if(sushi.id === eatenSushi.id) return {...sushi, eaten: true};
      return sushi;
    });
    setSushis(sushiRemaining)
  }

  const eatenSushis = sushis.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatenSushi={handleEatenSushi} />
      <Table eatenSushis={eatenSushis}/>
    </div>
  );
}

export default App;
