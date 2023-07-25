import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  // Inherit parents function in props
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "dummy",
    };
    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};
export default NewGoal;
