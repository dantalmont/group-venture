import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import paypalIcon from '@iconify/icons-logos/paypal';
import cashappIcon from '@iconify/icons-cib/cashapp';
// import venmoIcon from '@iconify/icons-cib/venmo';
import logoVenmo from '@iconify/icons-ion/logo-venmo';
import "./style.css";

// npm install --save-dev @iconify/react @iconify/icons-ion
// import { Icon, InlineIcon } from '@iconify/react';
// import logoVenmo from '@iconify/icons-ion/logo-venmo';
// <Icon icon={logoVenmo} />


class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer purple darken-2">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Instructions</h5>
                                <p class="grey-text text-lighten-4">Use the form to add a transaction. It will log money borrowed or lent. Click the paid check mark to mark as paid. To delete a transaction just go to the transanctions page and click "delete". To settle any outstanding debts or to make a money request follow the links on the right. </p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Payment Service Links</h5>
                                <div>
                                    <span><Link to="https://www.paypal.com/us/home">
                                        <Icon icon={paypalIcon} width="40" height="40" style={{marginright: 80}}  />         
                                        </Link></span> 
                                        {''}{''}{''}
                                    <span><Link to="https://www.cash.app/">
                                        <Icon icon={cashappIcon} width="40" height="40"  />         
                                        </Link></span>
                                    <span><Link to="https://www.venmo.com/">
                                    <Icon icon={logoVenmo} width="45" />         
                                        </Link>
                                    </span>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2020 Group Venture 
                            <a class="grey-text text-lighten-4 right" href="https://github.com/dantalmont/group-venture">Github Repository</a>
                        </div>
                    </div>
                </footer> 
            </div>
        );
    }
}

export default Footer;
