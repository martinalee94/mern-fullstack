// import logo from './logo.svg';
import "./App.css";
import React from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  // return React.createElement('h1',{}, 'Hi, this is react!');
  // JSX
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Course Main Topic" },
    { id: "cg3", text: "Help other students Q&A" },
  ];
  // communicate with child through function
  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h1 title="Course Goals">Course Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
