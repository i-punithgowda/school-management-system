import React, { useState, useEffect } from "react";
import Axios from 'axios';
const Issued = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        Axios.post('http://localhost:3001/fetch-all-issued')
            .then((response) => {
                if (response.data === false) {
                    alert('Unexpected error occured!!!');
                } else {
                    console.log(response.data);
                    setData(response.data);
                }
            })
    }, [])

    return (
        <div className="issued">
            <h1 className="text-dark" style={{ fontWeight: "bold", color: "#161616", textAlign: "center", marginTop: "10px" }}>Issued books</h1>

            <div className="tbl-all-books" style={{ height: "400px", overflow: "auto" }} >
                <table class="table table-borderless table-dark" >
                    <thead>
                        <tr>
                            <th scope="col">Student</th>
                            <th scope="col">Book</th>
                            <th scope="col">Class</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((d) => {
                            return <tr>
                                <td>{d.student_name}</td>
                                <td>{d.book_name}</td>
                                <td>{d.class}</td>
                                <td>{d.status}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default Issued;