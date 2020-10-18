import { component } from "react";

class CheckBox extends React.Component{
  constructor() {
    super();
    this.state = {isChecked: false};
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
  }

  handleChecked () {
    this.setState({isChecked: !this.state.isChecked});
  }

  render(){
    var txt;
    if (this.state.isChecked) {
      txt = 'Paid'
    } else {
      txt = 'Owe'
    }

    // remove () after handleChecked because you need pass 
    // reference to function
    // also add return before <div>
    return <div>
       <input type="checkbox" onChange={ this.handleChecked }/>
       <p>This box is {txt}</p>
    </div>
  }
}

ReactDOM.render(
  <CheckBox/>,
  document.getElementById('root')
);

 