import React, { useContext } from "react";
import Card from "./Card";
import "./Ideas.css";
import AppContext from "./AppContext";

const Ideas = () => {
  const [state, dispath] = useContext(AppContext);

  const ideaCards = state.ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
