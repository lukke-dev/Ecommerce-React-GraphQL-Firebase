import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const testPage = () => (
  <div>
    <h1>TESTE PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={testPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
