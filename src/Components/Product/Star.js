import React from "react";
import { FaStar } from "react-icons/fa";

function Star(props) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);
  const rating = props.rating;

  return (
    <div>
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
              color={rating > index ? colors.orange : colors.grey}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Star;
