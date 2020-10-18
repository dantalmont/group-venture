import React, { useState, useEffect } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
function Transactions () {
    const [transactions, setTransactions] = useState([])

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

    function deleteTransaction(id) {
        API.deleteTransaction(id)
          .then(res => loadTransactions())
          .catch(err => console.log(err));
    }
    

    return (
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Lender/Borrower</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(item =>
                <tr key={item._id}> 
                    <td>{item.location}</td>
                    <td>{item.name}</td>
                    <td>{item.bill}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td><DeleteBtn onClick={() => deleteTransaction(item._id)}/></td>
                </tr>
                )}
            </tbody>
        </table>
    );
}
    
    export default Transactions