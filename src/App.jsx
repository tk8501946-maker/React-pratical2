import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="main-title">Student Details</h1>

      <div className="student-container">
        <Student
          name="Rahul Kumar"
          rollNo="101"
          course="BCA"
          marks="85%"
        />

        <Student
          name="Priya Singh"
          rollNo="102"
          course="BCA"
          marks="92%"
        />

        <Student
          name="Amit Sharma"
          rollNo="103"
          course="BCA"
          marks="78%"
        />
      </div>
    </div>
  );
}

export default App;