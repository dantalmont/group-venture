import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CreditCard from "../components/CreditCard";
import DebitCard from "../components/DebitCard";
import { MaterialInput, FormBtn } from "../components/Form";
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';




function Dashhboard () {

    const [transactions, setTransactions] = useState([])
    const [formObject, setFormObject] = useState({ status : "Owe" })
    
    useEffect(() => {
        loadTransactions()
    }, [])

    function loadTransactions() {
        setFormObject( {...formObject, status : "Owe" } );

        API.getTransactions()
          .then(res => 
            setTransactions(res.data)
          )
          .catch(err => console.log(err));
      };

    function getDebt() {
        let debt = 0;
            transactions.map( transaction => 
                {
                    if(transaction.status === "Owe")
                        debt += transaction.bill;   
                }        
            );
        return debt;
    }
    function getCredit() {
        let credit = 0;
            transactions.map(transaction => 
                {    
                    if(transaction.status === "Paid")
                        credit += transaction.bill;
                }           
            );   
        return credit;
    }

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject( {...formObject, [name]: value} );
    }; 
    
    function handleFormSubmit(event) {
        event.preventDefault();

          API.saveTransaction({
            location: formObject.location,
            name: formObject.name,
            bill: formObject.bill,
            date: formObject.date,
            status: formObject.status
          })
            .then(res => loadTransactions())
            .catch(err => console.log(err));
    };


    function handleCheckbox(event){
        const { checked } = event.target; 
        if( checked === true){
            setFormObject( {...formObject, status : "Paid" } );
        }
        else{
            setFormObject( {...formObject, status : "Owe" } );
        }
        console.log(event.target.checked);
    }

    function renderTable() {
        return (
            <table class="responsive-table">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Lender/Borrower</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(item =>
                    <tr key={item.id}> 
                        <td>{item.location}</td>
                        <td>{item.name}</td>
                        <td>${item.bill}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return(
        <div>
            <div class="row">
                <div class="col s4 m4 l4 offset-l2">
                    <CreditCard>${getCredit()}</CreditCard>
                </div>  
                <div class="col s4 m4 l4">  
                    <DebitCard>- ${getDebt()}</DebitCard>
                </div>
            </div> 
            <div class="row" style={{backgroundColor:"white"}}>   
                <form style={{marginLeft: 150}}>
                    <MaterialInput onChange={handleInputChange} name="location" placeholder="Location"/>
                    <MaterialInput onChange={handleInputChange} name="name" placeholder="Lender/Borrower"/>
                    <MaterialInput onChange={handleInputChange} name="bill" placeholder="Amount"/>
                    <MaterialInput onChange={handleInputChange} name="date" placeholder="Date(MM/DD/YYYY)"/>
                    {/* <form action="checkStatus" id="checkboxId">
                        <p>
                            <label>
                                <input type="checkbox" onChange={handleCheckbox} name="status" value="false" />
                                <span>Paid</span>
                            </label>
                        </p>
                    </form> */}
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                            value="status"
                            control={<Checkbox color="primary" />}
                            label="Mark if Paid"
                            labelPlacement="top"
                            onChange={handleCheckbox}
                            />
                        </FormGroup>    
                    </FormControl>
                    <span>
                    <FormBtn
                    onClick={handleFormSubmit}
                    >Add</FormBtn></span>
                </form>
                <div>
                    {renderTable()}
                </div>
            </div>
        </div>  
    );

}   
 

export default Dashhboard;