import React from "react";

function TableBody (props) {
    return (
        <table>
        <thead>
          <tr>
              <th>Location</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {/* {/* {DataTransferItemList.map((item)=>)} */}
          <tr key={props.id}> 
            <td>{props.location}</td>
            <td>{props.bill}</td>
            <td>{props.date}</td>
            <td>{props.status}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default TableBody