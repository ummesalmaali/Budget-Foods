import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { UserProvider } from './UserContext';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Transaction from './components/Transaction/Transaction';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';

function App() {
  const [user,setUser] = useState({});
  

  return (
  <UserProvider value={[user,setUser]}>
    <p>Name:{user.name}</p>
    <Router>
     <Header/>
    <Switch>
      <PrivateRoute path='/groceryItem/:id'>
        <Transaction/>
      </PrivateRoute>
      {/* <Route path='/groceryItem/:id'>
          <Transaction/>
      </Route> */}
      
      <Route path='/login'>
         <Login/>
      </Route>
      <Route path='/orders'>
        <Orders></Orders>
      </Route>
      <Route path="/admins">
        <Admin/>
      </Route>
      <Route exact path='/'>
          <Home/>
      </Route>
    </Switch>
  </Router>
  </UserProvider>
  );
}

export default App;
