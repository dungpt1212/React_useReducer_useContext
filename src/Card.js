import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "./ThemeContext";

const Card = ({ title, description, id, deleteIdea, isFavorited }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card ${isFavorited && "favorite"} ${theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  );
};

export default Card;
