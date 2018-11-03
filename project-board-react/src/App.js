import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProjectTask from "./components/ProjectTask/UpdateProjectTask";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={ProjectBoard} />

            <Route exact path="/addProjectTask" component={AddProjectTask} />
            <Route
              exact
              path="/updateProjectTask/:pt_id"
              component={UpdateProjectTask}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
