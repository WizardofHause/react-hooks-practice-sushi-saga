import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatenSushi }) {

  const [sushiIndex, setSushiIndex] = useState(0)


  //To render a sushiCard we first set the state for the sushi indexes
  //they change over time, they cannot be computed, and they are independent
  //we use the .slice operator to pull out the first 4 items in the sushi array
  //we then map through those four items and create our sushi card
  const sushiCard = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        onEatenSushi={onEatenSushi}
      />
    ))


  //when we click the MoreButton, we reference the state setter of the sushiIndex
  //in the body of the function we take the current sushiIndex state, add 4 to it,
  //then calculate the REMAINDER VALUE of sushiIndex + 4 (8, 12, 16, 20...) / sushis.length (100)
  //... for ex: current sushis index is 3, 3+4=7, 7/100=0.07 which is a remainder of 1, so that 
  //will be the new starter index that we map through to make our cards
  function handleMore() {
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length)
  }

  return (
    <div className="belt">
      {sushiCard}
      <MoreButton onClickMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
