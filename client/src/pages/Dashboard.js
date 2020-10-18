import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CreditCard from "../components/CreditCard";
import DebitCard from "../components/DebitCard";
import Table from "../components/Table";
import { MaterialInput , Checkbox , FormBtn , Radio} from "../components/Form";
// import Radio from "../components/Radio";




function Dashhboard () {

    const [transactions, setTransactions] = useState([])
    const [formObject, setFormObject] = useState({})
    // const [statusType, setStatusType] = useState
    
    useEffect(() => {
        API.getTransactions()
        .then( res =>
            setTransactions(res.data)
        )

    }, [])

    function loadTransactions() {
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
    setFormObject({...formObject, [name]: value})
    }; 
    
    function handleFormSubmit(event) {
        event.preventDefault();
        //add more req's like bill && status
         {
          API.saveTransaction({
            location: formObject.location,
            bill: formObject.bill,
            date: formObject.date,
            status: formObject.status
          })
            .then(res => loadTransactions())
            .catch(err => console.log(err));
        }
    };

    function handleCheckbox(){
        let status = "";
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
        <div class="row">
            <CreditCard>${getCredit()}</CreditCard>
            <DebitCard>- ${getDebt()}</DebitCard>
            <form style={{marginLeft: 150}}>
                <MaterialInput onChange={handleInputChange} name="location" placeholder="Location"/>
                <MaterialInput onChange={handleInputChange} name="name" placeholder="Lender/Borrower"/>
                <MaterialInput onChange={handleInputChange} name="bill" placeholder="Amount"/>
                <MaterialInput onChange={handleInputChange} name="date" placeholder="Date(MM/DD/YYYY)"/>
                <Checkbox onChange={handleInputChange} />
                <FormBtn
                // disabled={!(formObject.name && formObject.amount)}
                onClick={handleFormSubmit}
                >Add Transaction</FormBtn>
            </form>
            <div>
                {renderTable()}
            </div>
        </div>  
    );

}   
 

export default Dashhboard;