// import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoalList from './components/GoalList';

function App() {
  // return React.createElement('h1',{}, 'Hi, this is react!');
  // JSX
  return <div className="course-goals">
  <h1 title="Course Goals">Course Goals</h1>
  <GoalList />
  </div>;
}

export default App;
