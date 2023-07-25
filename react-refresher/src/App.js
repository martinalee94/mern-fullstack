import "./App.css";
import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  // useState returns an array such as [current state snapshot, update state function]
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Course Main Topic" },
    { id: "cg3", text: "Help other students Q&A" },
  ]);

  // communicate with child through function
  // update state and re-render
  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  // JSX
  return (
    <div className="course-goals">
      <h1 title="Course Goals">Course Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
