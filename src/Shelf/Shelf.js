import React from 'react';
import './E-Book.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from "react";


class Shelf extends React.Component {
    render() {
        return (
            <div>
                <Ebook />
            </div>
        );
    }
}
export default Shelf;
const Ebook = () => {


    const [eboks, setEboks] = useState([]);
    const [temp, setTemp] = useState([]);
    useEffect(() => {
        const CustomerId=localStorage.getItem("CustomerId");
        fetch('https://localhost:44356/api/Shelves/'+CustomerId)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setEboks(result);
                    setTemp(result);
                }
            );

    },
    []
    )
const handleCategoryChange = (event) => {

    setTemp(
        eboks.filter((eboks) => eboks.BookCategory?.Category === event)
    );
};




//if(this.state.eboks.length !== 0)
//  {     
return (
    <div className='body1 container' style={{justifyContent:"center"}}>
        {/* {console.log(this.state.eboks)} */}
        <Dropdown onSelect={handleCategoryChange} style={{ textAlign: "left" }}>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">Book Category</Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item eventKey="E-Book">E-Book</Dropdown.Item>
                <Dropdown.Item eventKey="Audiobook">Audio-Book</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        {temp.map(book => (
            
            <div class="card  mt-5" style={{ width: "1000px",height: "320px" }}>
                {console.log(new Date(book.Expairy_date).getDate()+"days Left")}
                <div class="row g-0">

                    <div class="col-md-4 pt-2" >
                        <img 
                        src={book.Book?.Path?.BookPath + book.Book?.Cover} style={{width:"220px", maxHeight:"300px"}}  alt="...">
                    </img>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <div class="card-body">
                            <h3 class="card-title">{book.Book.Title}</h3>
                            <br></br>
                            <h5 class="card-text">{book.Book.Author?.Author_Name}</h5>
                            <p class="card-text"><small class="text-muted">{"Expiry on: "+(new Date(book.Expairy_date).getDate())+"/"+(new Date(book.Expairy_date).getMonth())+"/"+(new Date(book.Expairy_date).getFullYear())}</small></p>
                            <br></br>
                            <button type="button" class="btn btn-danger">Read/Listen</button>
                        </div>
                    </div>
                </div>
            </div>

        )
        )
        }
    </div>
)
    //    }
    /*else{
         return(
             <div style={{display:"flex", justifyContent:"center" , paddingTop : "200px"}}>
                 <h3 style={{ color: 'lightgray', fontWeight: "bolder", textAlign:"center" }}>
                      Shelf is Empty! Purchase Products to add in Shelf </h3>                       
             </div>
         );
     }
     */


}






