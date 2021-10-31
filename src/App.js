import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BeerDetails from "./BeerDetails";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Tasted from "./Tasted";
import Brewed from "./Brewed";
import Results from "./Results";

function App() {
  const tasted = new Set();
  const brewed = new Set();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home tasted={tasted} brewed={brewed} />
            </Route>
            <Route path="/beer/:id">
              <BeerDetails />
            </Route>
            <Route path="/tasted">
              <Tasted tasted={tasted} />
            </Route>
            <Route path="/brewed">
              <Brewed brewed={brewed} />
            </Route>
            <Route path="/search">
              <Results />
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
