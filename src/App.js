import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BeerDetails from "./BeerDetails";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/beer/:id">
              <BeerDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
