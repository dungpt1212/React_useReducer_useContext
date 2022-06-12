import React, { useState, useContext } from "react";
import "./Form.css";
import AppContext from "./AppContext";

const Form = () => {
  const [appState, appDispatch] = useContext(AppContext);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const handleChange = (event) => {
    //setFormData({ [event.target.name]: event.target.value });
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitIdea = (event) => {
    console.log("appState", appState);
    console.log("appDispatch", appDispatch);
    console.log("formData", formData);
    const action = {
      type: "ADD_IDEA",
      //ideas: { ...formData, id: Date.now() }
      ideas: { id: Date.now(), ...formData }
    };
    event.preventDefault();
    // const newIdea = {
    //   id: Date.now(),
    //   ...this.state
    // };
    appDispatch(action);
    clearInputs();
  };

  const clearInputs = () => {
    setFormData({ title: "", description: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={(event) => handleChange(event)}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={(event) => handleChange(event)}
      />

      <button onClick={(event) => submitIdea(event)}>SUBMIT</button>
    </form>
  );
};

export default Form;
