import Axios from 'axios';
import React, { useState } from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap'
const Fees = () => {
const [data,setData]=useState('');
    function fetchFees(e) {
        Axios.post('http://localhost:3001/fetch-fees', {
            class: e
        })
            .then((response) => {
                console.log(response);
setData(response.data);
            })
    }



    return (
        <div className="studentFees">
            <h1 class="text-dark" style={{fontWeight:'bold'}} >Student fees data</h1> 
            <div className="selectClass">
            <DropdownButton id="dropdown-basic-button" title="Select Class" variant="danger" onSelect={(e)=>fetchFees(e)}>
  <Dropdown.Item eventKey="1">1</Dropdown.Item>
  <Dropdown.Item eventKey="2">2</Dropdown.Item>
  <Dropdown.Item eventKey="3">3</Dropdown.Item>
  <Dropdown.Item eventKey="4">4</Dropdown.Item>
  <Dropdown.Item eventKey="5">5</Dropdown.Item>
  <Dropdown.Item eventKey="6">6</Dropdown.Item>
  <Dropdown.Item eventKey="7">7</Dropdown.Item>
  <Dropdown.Item eventKey="8">8</Dropdown.Item>
  <Dropdown.Item eventKey="9">9</Dropdown.Item>
  <Dropdown.Item eventKey="10">10</Dropdown.Item>
</DropdownButton>
            </div>

            <div className="tblfees">
            <table class="table table-borderless table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Total fees</th>
      <th scope="col">Fees paid</th>
      <th scope="col">Pending fees</th>
    </tr>
  </thead>
{data && data.map((d)=>{
return <tbody key={d.id}>
    <tr>
      <td>{d.name}</td>
      <td>{d.class}</td>
      <td>{d.fee}</td>
      <td>{d.paid}</td>
      <td>{(d.fee)-(d.paid)}</td>
    </tr>
    </tbody>
})}

</table>
            </div>
        </div>
    );
}

export default Fees;