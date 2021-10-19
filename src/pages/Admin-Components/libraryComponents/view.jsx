import React, { useState, useEffect } from 'react'
import Axios from 'axios';
const ViewBooks = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        Axios.post('http://localhost:3001/get-all-books')
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
    }, [])
    return (
        <div className="view-all-books" style={{ width: "100%", height: "100%" }}>
            <h1 className="text-dark" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: "10px" }}>Library books</h1>

            <div className="tbl-all-books" style={{ height:"400px",overflow: "auto"}} >
            <table class="table table-borderless table-dark" >
  <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Title</th>
      <th scope="col">Copies</th>
      <th scope="col">Shelf</th>
      <th scope="col">Available</th>
    </tr>
  </thead>
  <tbody>
  {data && data.map((d)=>{
      return <tr>
          <td>{d.book_isbn}</td>
          <td>{d.title}</td>
          <td>{d.copies}</td>
          <td>{d.shelf}</td>
          <td>{d.available}</td>
      </tr>
  })}
  </tbody>
</table>
            </div>

        </div>
    );
}

export default ViewBooks;