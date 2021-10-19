import react, { useState } from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import ImgAdd from '../../../images/lib-add.png';
import Axios from 'axios';
const Add = () => {
    const [isbn, setIsbn] = useState('');
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [desc, setDesc] = useState('');
    const [copies, setCopies] = useState('');
    const [sclass, setSClass] = useState('');
    const [shelf, setShelf] = useState('');
    const [lang, setLang] = useState('');

    function handleSave() {
        if (isbn === "" || bookName === "" || copies === "" || shelf === "") {
            alert('Please fill mandatory fields!!!');
        } else {
            Axios.post('http://localhost:3001/save-book', {
                isbn: isbn,
                bname: bookName,
                author: author,
                publisher: publisher,
                desc: desc,
                copies: copies,
                sclass: sclass,
                shelf: shelf,
                lang: lang,
                available: 'Yes',
            }).then((response) => {
                alert(response.data);
                setIsbn('');
                setBookName('');
                setAuthor('');
                setCopies('');
                setDesc('');
                setPublisher('');
                setSClass('');
                setShelf('');
                setLang('');
            })
        }
    }


    return (
        <div className="Add-Book-container" style={{ width: "100%", height: '100%' }}>
            <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#161616', fontWeight: 'bold' }}>Add new books</h1>
            <div className="img-add">
                <img src={ImgAdd} alt="" style={{ width: "200px", display: "inline-block", position: "relative", left: "40%" }} />
            </div>
            <br />
            <div className="form-library-add" style={{ marginLeft: "120px" }}>
                <input type="text" class="form-control w-25" placeholder="Book ISBN" style={{ display: "inline-block" }} onChange={(e) => setIsbn(e.target.value)} value={isbn} />
                <input type="text" class="form-control w-25" placeholder="Book name" style={{ display: "inline-block" }} onChange={(e) => setBookName(e.target.value)} value={bookName} />
                <input type="text" class="form-control w-25" placeholder="Author" style={{ display: "inline-block" }} onChange={(e) => setAuthor(e.target.value)} value={author} /> <br />
                <input type="text" class="form-control w-25" placeholder="Publisher" style={{ display: "inline-block" }} onChange={(e) => setPublisher(e.target.value)} value={publisher} />
                <input type="text" class="form-control w-25" placeholder="Description" style={{ display: "inline-block" }} onChange={(e) => setDesc(e.target.value)} value={desc} />
                <input type="text" class="form-control w-25" placeholder="Copies" style={{ display: "inline-block" }} onChange={(e) => setCopies(e.target.value)} value={copies} /> <br /> <br />
                <div className="select-class" >
                    <DropdownButton id="dropdown-basic-button" title="Select Class" variant="success" style={{ marginLeft: "250px" }} onSelect={(e) => setSClass(e)} >
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
                <div className="select-subject" >
                    <DropdownButton id="dropdown-basic-button" title="Select language" variant="info" style={{ marginLeft: "250px" }} onSelect={(e) => setLang(e)} >
                        <Dropdown.Item eventKey="English">English</Dropdown.Item>
                        <Dropdown.Item eventKey="Kannada">Kannada</Dropdown.Item>
                        <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>

                    </DropdownButton>
                </div>
                <div className="select-shelf" >
                    <DropdownButton id="dropdown-basic-button" title="Select shelf" variant="dark" style={{ marginLeft: "250px" }} onSelect={(e) => setShelf(e)} >
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
            </div> <br /> <br />
            <Button variant="warning" style={{ position: "absolute", left: "50%", margin: "20px" }} onClick={handleSave}>Save</Button>


        </div>
    );
}

export default Add;
