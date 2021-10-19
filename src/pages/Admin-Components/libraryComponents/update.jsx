import ImgUpdate from '../../../images/update.png'
import {Button,Dropdown,DropdownButton} from 'react-bootstrap';
import react,{ useState} from 'react';
import Axios from 'axios';
const Update = () => {
    const [ISBN,setISBN]=useState('');
    const [bookName,setBookName]=useState('');
    const [author,setAuthor] = useState('');
    const [copies,setCopies] = useState('');
    const [shelf,setShelf] = useState('');

function handleSearch(){
    setAuthor('');
    setBookName('');
    setCopies('');
    setShelf('');
Axios.post('http://localhost:3001/search-book',{
isbn:ISBN
}).then((response)=>{
if(response.data === false){
    alert('ISBN number doesnt exists!!! ')
}else{
    setBookName(response.data[0].title);
    setAuthor(response.data[0].author);
    setCopies(response.data[0].copies);
    setShelf(response.data[0].shelf);
}
})
}

function handleUpdate(){
    Axios.put('http://localhost:3001/update-book',{
        isbn:ISBN,
        bname:bookName,
        author:author,
        copies:copies,
        shelf:shelf
    }).then((response) =>{
        if(response.data===false){
            alert('Unexpected error occured!!!');
            setISBN('');
            setAuthor('');
            setBookName('');
            setCopies('');
            setShelf('');
        }else{
            alert('Book data has been updated!');
            setISBN('');
            setAuthor('');
            setBookName('');
            setCopies('');
            setShelf('');
        }
    })
}

function handleDelete(){
    Axios.delete(`http://localhost:3001/delete-book/${ISBN}`).then((response)=>{
        if(response.data===true){
            alert('Book data has been deleted');
            setISBN('');
            setAuthor('');
            setBookName('');
            setCopies('');
            setShelf('');
        }else{
            alert('Unexpected error occured!!!');
            setISBN('');
            setAuthor('');
            setBookName('');
            setCopies('');
            setShelf('');
        }
    })
}


    return ( 
        <div className="update-library-books" style={{width:"100%",height:"100%;"}}>
            <h1 className="text-dark" style={{fontWeight:'bold',textAlign:'center',marginTop:"10px"}}>Update book details</h1>
     <img src={ImgUpdate} alt="" style={{width:"200px",position:"relative",left:"40%"}} /> <br /> <br />
      <div className="form-group"  style={{position:"relative",left:"40%"}}>
          <input type="text" className="form-control w-25" placeholder="Enter ISBN" style={{display:"inline-block",marginRight:"20px" }} onChange={(e)=>setISBN(e.target.value)} value={ISBN}/>
          <Button variant="success" onClick={handleSearch}>Search</Button>
          <Button variant="light" onClick={handleDelete} style={{marginLeft:"20px", color:"crimson", fontWeight: "bold"}}>Delete</Button>
      </div>
      <br />
<div className="form-group form-library-update">
<input type="text" class="form-control w-25" placeholder="Book name" style={{ display: "inline-block" }} onChange={(e) => setBookName(e.target.value)} value={bookName} />
  <input type="text" class="form-control w-25" placeholder="Author" style={{ display: "inline-block" }} onChange={(e) => setAuthor(e.target.value)} value={author} /> 
  <input type="text" class="form-control w-25" placeholder="Copies" style={{ display: "inline-block" }} onChange={(e) => setCopies(e.target.value)} value={copies} /> 
</div> <br />
<div className="shelfSelector" >
                    <DropdownButton id="dropdown-basic-button" title="Select shelf" variant="dark" style={{ marginLeft: "350px" }} onSelect={(e) => setShelf(e)} >
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
                </div> <br />
<Button variant="warning" style={{ marginLeft: "350px",fontWeight: "bold",width:"100px" }} onClick={handleUpdate} >Update</Button>

        </div>
     );
}
 
export default Update;
