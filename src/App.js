import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TablePage from "./pages/tablePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/page/:page">
            <TablePage />
          </Route>
          <Redirect from="/" to="/page/1" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
