import React from "react";



export function MaterialInput(props) {
  return (      
        <div class="input-field col m2">
          <input type="text" class="validate" {...props} />
        </div>
  );      
}

export function Radio(){
  return (
      <label>
        <input type="radio" name="paid" value="paid" checked>Paid</input>
        <input type="radio" name="owe" value="owe">Owe</input>
      </label>
  );
}

export function Checkbox(props){
  return (
    <form action="#">
      <p>
        <label>
          <input type="checkbox" value="paid" {...props} />
          <span>Paid</span>
        </label>
        </p> 
    </form>
  )
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ marginTop: 15 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
