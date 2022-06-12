import React, { useContext } from "react";
import "./Card.css";
import AppContext from "./AppContext";

const Card = ({ title, description, id }) => {
  const [state, dispath] = useContext(AppContext);

  const deleteIdea = (id) => {
    const action = {
      type: "DELETE_IDEA",
      id: id
    };
    dispath(action);
  };

  return (
    <div className={`card favorite ${state.theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          deleteIdea(id);
        }}
      >
        🗑
      </button>
    </div>
  );
};

export default Card;
