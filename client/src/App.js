import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Transactions from "./pages/Transactions"

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/transactions" component={Transactions} />
      <Footer />
    </Router>  
  );
}

export default App;
