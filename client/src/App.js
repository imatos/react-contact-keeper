import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Register from './auth/Register';
import Login from './auth/Login';
import Alerts from './layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AlertState>
      <AuthState>
        <ContactState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </ContactState>
      </AuthState>
    </AlertState>
  );
};

export default App;
