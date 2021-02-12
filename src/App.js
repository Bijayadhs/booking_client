//https://www.notion.so/2d3360e394b1469d865912e107d12da1?v=6c4482aedc514372845435433bd6b78f

import './App.css';
import Home from './booking/Home';
import Navbar from './components/Navbar';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/DashboardSeller';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer position='bottom-center' draggable />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/dashboard/seller' component={DashboardSeller} />
      </Switch>
    </Router>
  );
}

export default App;
