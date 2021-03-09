
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Submit from './Submit'
import Home from './Home';


function App() {
  return (
    <main>
    <Router>
       
        <Switch>
            <Route exact path="/">
                <Home/>  
            </Route>
            <Route path="/submit">
              <Submit/>
            </Route>
            
        </Switch>
    </Router>
</main>
  );
}

export default App;
