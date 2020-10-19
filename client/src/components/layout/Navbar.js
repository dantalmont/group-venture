import React, { Component } from "react";
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
        return (
               <nav class="navbar">
                    <div class="nav-wrapper purple darken-2">
                        <Link class="brand-logo" to="/">Group Venture &#x029CE;</Link>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link 
                                    to="/"
                                    className={
                                        window.location.pathname === "/" || window.location.pathname === "/dashboard"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                Dashboard
                                </Link>    
                            </li>
                            <li>
                            <Link 
                                    to="/transactions"
                                    className={
                                        window.location.pathname === "/transactions" ? "nav-link active": "nav-link"
                                    }
                                >
                                Transactions
                                </Link> 
                            </li>
                        </ul>
                    </div>
                </nav> 
        );
    }
}

export default Navbar;