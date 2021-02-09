//https://www.notion.so/2d3360e394b1469d865912e107d12da1?v=6c4482aedc514372845435433bd6b78f

import './App.css';
import Home from './booking/Home';
import Navbar from './components/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
