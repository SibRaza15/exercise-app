import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function App() {
  return (
    
      <div className="container">
      <Router>
      <Navbar />
      <br/>
      <Switch>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route component = {NoMatchPage}/>
      </Switch>
      </Router>
      </div>
    
  );
}



export default App;