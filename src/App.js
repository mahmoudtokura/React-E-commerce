import React from "react";
import { Switch, Route  } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";


const Hats = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
