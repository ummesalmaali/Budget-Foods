import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Transaction from "./components/Transaction/Transaction";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Shipment from "./components/Shipment/Shipment";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserProvider value={[user, setUser]}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/groceryItem/:id">
            <Transaction />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admins">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
