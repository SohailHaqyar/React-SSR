import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home, About, Article } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/article">Article</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
