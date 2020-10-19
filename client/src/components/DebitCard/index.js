import React from "react";
import debitPic from "./debitPic.png";

function CreditCard ({children}) {
    return (
        
            <div class="card" style={{height: 300, alignItems: "center"}}>
                {/* <div class="card-image">
                    <img src={debitPic} style={{height:30, width:50}}></img>
                    <h4 class="fluid-text center-align" style={{ color: "black"  }}>INBOX</h4>
                </div> */}
                <div style={{ display: 'flex', alignItems: 'center' }}><img src={debitPic} style={{height:55, width:50, marginLeft:100, marginTop:45}}></img>
                <h4 class="fluid-text center-align" style={{marginTop:75, color: "black"  }}>OutBox</h4>
                </div>
                <div class="card-content">
                    <h1 class="fluid-text center-align" style={{ color: "red" }}>{children}</h1>
                </div>
            </div>
      
    );
 
}

export default CreditCard;