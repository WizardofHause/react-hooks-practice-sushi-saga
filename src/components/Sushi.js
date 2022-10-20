import React from "react";

function Sushi({ sushi, onEatenSushi }) {

  const { name, img_url, price, eaten } = sushi

  function handleEat() {
    if (!eaten) {
      onEatenSushi(sushi)
    } else {
      alert("PUT DOWN THE FORK (ಠ_ಠ)")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={`${name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
