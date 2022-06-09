import React, { useState, useEffect, useReducer } from "react";
import Ideas from "./Ideas";
import Form from "./Form";
import ThemeContext from "./ThemeContext";
import "./App.css";

const initState = {
  theme: "light",
  ideas: []
};
const reducerTheme = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};
const reducerIdea = (state, action) => {
  switch (action.type) {
    case "ADD_IDEA":
      return { ...state, ideas: [...state.ideads, action.ideas] };
    case "DELETE_IDEA":
      return state;
    default:
      return state;
  }
};

function App() {
  //const [ideas, setIdeas] = useState([]);
  const [ideaState, dispatchIdea] = useReducer(reducerIdea, initState);
  const [themeState, dispatchTheme] = useReducer(reducerTheme, initState);

  useEffect(() => {
    document.title = `Ideabox (${ideas.length})`;
  });

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== id);

    setIdeas(filteredIdeas);
  };

  const toggleTheme = () => {
    const action = {
      type: "TOGGLE_THEME"
    };

    dispatchTheme(action);
  };

  return (
    <ThemeContext.Provider value={themeState.theme}>
      <main className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
