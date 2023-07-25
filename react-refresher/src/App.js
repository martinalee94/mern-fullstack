// import logo from './logo.svg';
import "./App.css";
import React from "react";
import GoalList from "./components/GoalList";

function App() {
  // return React.createElement('h1',{}, 'Hi, this is react!');
  // JSX
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Course Main Topic" },
    { id: "cg3", text: "Help other students Q&A" },
  ];
  return (
    <div className="course-goals">
      <h1 title="Course Goals">Course Goals</h1>
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
