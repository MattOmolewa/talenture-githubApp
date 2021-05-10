import React from "react";
import "./App.scss";
// import { HomePage } from "./components/HomePage";
import GithubState from "./context/GithubState";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { ResultCanvas } from "./components/ResultCanvas";

function App() {
  return (
    <Router>
      <GithubState>
        <div className="App">
          <div className="container">
            <Header />
            <ResultCanvas />

            {/* <Route render={() => <Redirect to="/" />} /> */}
          </div>
        </div>
      </GithubState>
    </Router>
  );
}

export default App;
