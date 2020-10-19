import React from "react";
import creditPic from "./creditPic.png";
import "./style.css";

function CreditCard ({children}) {
    return (
        <div class="card" style={{height: 300}}>
            {/* <div class="card-image">
                <img src={creditPic} style={{height:30 , width: 50}}></img>  
                <h4 class="fluid-text center-align" style={{ color: "black" }}>INBOX</h4>
            </div> */}
            <div style={{ display: 'flex', alignItems: 'center' }}><img src={creditPic} style={{height:40, width:40, marginLeft:150, marginTop:65}}></img>
                <h4 class="fluid-text center-align" style={{marginTop:75, color: "black"  }}>InBox</h4>
                </div>
            <div class="card-content">
                <h1 class="fluid-text center-align" style={{ color: "green" }}>{children}</h1>
            </div>
        </div>       
    );
}

export default CreditCard;