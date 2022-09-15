import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NavbarAtas from './components/NavbarAtas'
import NavbarBawah from './components/NavbarBawah'
import Menu from './components/Menu'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <NavbarAtas />
   <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/dashboard" component={Dashboard} />
     <Route exact path="/menu" component={Menu} />
   </Switch>
   <NavbarBawah />
 </Router>    
  );
}

export default App;
