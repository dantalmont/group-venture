import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Transactions from "./pages/Transactions"
import Wrapper from "./components/Wrapper";

function App() {
  
  return (
    <Router>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/transactions" component={Transactions} />
      </Wrapper>
      <Footer />
    </Router>  
  );
}

export default App;
