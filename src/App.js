import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Fantasy from "./routes/Fantasy";
import Documentary from "./routes/Documentary";
import Horror from "./routes/Horror";
import "./components/Movie.css";
import "./components/Loader.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/documentary" component={Documentary} />
      <Route path="/fantasy" component={Fantasy} />
      <Route path="/horror" component={Horror} />
    </BrowserRouter>
  );
}

export default App;
