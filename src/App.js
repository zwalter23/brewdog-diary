import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BeerDetails from "./BeerDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/*<Navbar/> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/beer/:id">
              <BeerDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
