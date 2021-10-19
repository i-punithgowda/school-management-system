import React,{useState,useEffect} from 'react';
import Axios from 'axios';
const Returned = () => {
    const [data, setData] = useState('');
    
    useEffect(() => {
        Axios.post('http://localhost:3001/fetch-all-returned')
            .then((response) => {
                if (response.data === false) {
                    alert('Unexpected error occured!!!');
                } else {
                  
                    setData(response.data);
                }
            })
    }, [])

    return (
        <div className="returned">
            <h1 className="text-dark" style={{ fontWeight: "bold", color: "#161616", textAlign: "center", marginTop: "10px" }}>Returned books</h1>

            <div className="tbl-all-books" style={{ height: "400px", overflow: "auto" }} >
                <table class="table table-borderless table-dark" >
                    <thead>
                        <tr>
                            <th scope="col">Student</th>
                            <th scope="col">Book</th>
                            <th scope="col">Class</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((d) => {
                            return <tr>
                                <td>{d.studentName}</td>
                                <td>{d.bookName}</td>
                                <td>{d.class}</td>
                        
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        </div>
    );
}


 
export default Returned;