import React, { Component } from "react";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Paid"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.status);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="paid"
                    value="paid"
                    checked={this.state.selectedOption === "paid"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Paid
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="owe"
                    value="owe"
                    checked={this.state.selectedOption === "owe"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Owe
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Radio;