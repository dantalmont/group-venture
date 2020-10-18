import React from "react";
import debitPic from "./debitPic.png";

function CreditCard ({children}) {
    return (
        <div class="col s6 m6">
            <div class="card">
                <div class="card-image">
                    <img class="responsive-img" src={debitPic} style={{height:30, width:50}}></img>
                    <span class="flow-text" style={{ color: "black" }}>INBOX</span>
                </div>
                <div class="card-content">
                    <h1 style={{ color: "red" }}>{children}</h1>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;