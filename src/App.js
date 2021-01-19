
import './App.css';
import Form from './components/Form'; 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Form} />
        <CssBaseline></CssBaseline>
      </Switch>
    </Router>

      
  );
}

export default App;
