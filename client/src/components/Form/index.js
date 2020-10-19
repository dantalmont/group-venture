import React from "react";
import "./style.css";


export function MaterialInput(props) {
  return (      
        <div class="input-field col s2">
          <input type="text" class="validate" {...props} />
        </div>
  );      
}

// export function Radio(){
//   return (
//       <label>
//         <input type="radio" name="paid" value="paid" checked>Paid</input>
//         <input type="radio" name="owe" value="owe">Owe</input>
//       </label>
//   );
// }

// export function Checkbox(props){
//   return (      
//     <div>
//       <input type="checkbox" />
//   <p>rdfyghds fnansfaspf sflnaskn slfnalsknfnas</p>
//       {/* </input>   */}
//     </div>
//   )
// }


export function FormBtn(props) {
  return (
    <button {...props} style={{ marginTop: 15 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
