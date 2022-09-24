import React, { Component, useState, useEffect } from 'react';
import Description from './Description'



const FetchDiscription=()=>{

    const [Books, setBooks] = useState([]);


    let bookid=localStorage.getItem("Bookid")

    useEffect(() => {
        fetch('http://localhost:8080/BookWormJ/getBooks/'+bookid)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setBooks(result);
                }
            );
    },[])
    return (
        <div>

            <Description object={Books}></Description>

        </div>
    )

};
export default FetchDiscription;

