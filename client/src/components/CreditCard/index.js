import React from "react";
import creditPic from "./creditPic.png";
import "./style.css";

function CreditCard ({children}) {
    return (
        <div class="col s6 m6">
            <div class="card">
                <div class="card-image">
                    <img class="moneyBox" src={creditPic} style={{height:30, width:50}}></img>
                    <span class="flow-text" style={{ color: "black" }}>INBOX</span>
                </div>
                <div class="card-content">
                    <h1 style={{ color: "green" }}>{children}</h1>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;