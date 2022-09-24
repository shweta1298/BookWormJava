import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from 'react-bootstrap';
import './InvoiceTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import React from 'react';
//import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
//import {AccountBalanceWalletIcon, PlaylistRemoveIcon ,CurrencyRupeeIcon} from '@mui/icons-material';
import PayNowButton from './Payments';
import { Navigate } from 'react-router-dom';
import { setAutoFreeze } from 'immer';


const columns = [

    { field: 'Id', headerName: 'Sr no.', width: 90 },
    { field: 'title', headerName: 'BookName', width: 250 },
    { field: 'RentalPackage', headerName: 'Rental Package', width: 200 },
    { field: 'Price', headerName: 'Price (in Rs)', width: 200 }
];
let tempList = [];
let PurchaseList = [];
//let temp1=[];

//let book=[];
const InvoiceTable = () => {
    const [Books, setBooks] = useState([]);
    const [postBooks, setPostBooks] = useState([]);
    const [Total, setTotal] = useState(0);
    const [errorMsg, seterrorMsg] = useState("");

    setAutoFreeze(false);


    function calTotal() {
        let tempTotal = 0;
        Books.forEach((item) => {
            tempTotal = tempTotal + item.Price;
        })
        console.log(tempTotal)
        setTotal(tempTotal)
    }

    function addItem(list, purchaseType) {

        for (let i = 0; i < list.length; i++) {
            console.log(list[i])
            tempList.push({
                id: (i + 1),
                Id: list[i]?.Id,
                title: list[i]?.title,
                RentalPackage: purchaseType !== null ? purchaseType + " days" : "",//[i].rentalPackage,  //expairy date
                Price: purchaseType !== null ? list[i]?.rentPrice * purchaseType : list[i].salePrice //list[i].salePrice 
            });
        }
        setBooks(tempList);
    }
    function addListItem(list, purchaseType) {

        for (let i = 0; i < list.length; i++) {
            console.log(list[i].salePrice)
            tempList.push({
                Id: (i + 1),
                id: list[i]?.books.id,
                title: list[i]?.books.title,
                RentalPackage: null, // purchaseTypes[i].rentalPackage,  //expairy date
                Price: list[i]?.books.salePrice  // item.purchaseType[i].purchaseType==="Rent"? item[i].books.rentPrice*purchaseType.rentalPackage : item[i].salePrice
            });
        }
        setBooks(tempList);
    }

    useEffect(() => {
        if (localStorage.getItem("Bookid") !== null) {
            let bookid = localStorage.getItem("Bookid");
            //console.log(bookid)
            //book=JSON.parse(JSON.stringify(book))
            // let books=[bookid];
            // console.log(books);
            let purchaseType = localStorage.getItem("purchasetypeses");

            //addListItem(books,pt)


            fetch('http://localhost:8080/BookWormJ/getBooks/'+bookid)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        addItem([result], purchaseType)
                        setBooks(tempList);
                        setPostBooks(result);
                        localStorage.removeItem("Bookid");
                        localStorage.removeItem("purchasetypeses");

                    }
                );


            //for (let i = 1; i === 1; i++) {
            // tempList.push({
            //     id: 1,
            //     Id: book?.Id,
            //     title: books.title,
            //     RentalPackage: purchaseType.rentalPackage,  //expairy date
            //     Price: purchaseType.purchaseType === "Rent" ? books.rentPrice * purchaseType.rentalPackage : books.salePrice
            // });
            //Object.preventExtensions(tempList);
            //}

            //setBooks(tempList);
            //setPostBooks(book);
        }
        else {
            if (localStorage.getItem("CustomerId") == null) {
                //  navigate("/")
            }
            const CustomerId = localStorage.getItem("CustomerId")
            fetch("https://localhost:44356/api/GetFromCart/" + CustomerId)
                .then(res => res.json())
                .then((result) => {
                    //result.record.forEach(addListItem);
                    console.log(result)
                    let purchaseTypes = localStorage.getItem("purchasetypeses");
                    addListItem(result, purchaseTypes);
                    setPostBooks(result);
                })
        }
        calTotal();
    }, [Books]);


    const onBuyHandler = () => {
    //     if (localStorage.getItem("CustomerId") == null) {
    //         //  navigate("/")
    //     }
    //     const arrIndex = Books.map(element => element.id);
    //     console.log(Books);
    //     console.log(arrIndex);
    //     const temp = postBooks.filter((postItem) => arrIndex.includes(postItem.BookId));


    //     //console.log(postBooks.filter((postItem) => arrIndex.includes(postItem.Id)))
    //     setPostBooks(temp);

    //     let Sales = [];
    //     let tempdate = new Date();
    //     let Expiry_date = 0;
    //     let purchaseType = localStorage.getItem("purchasetypeses");
    //     for (let i = 0; i < temp.length; i++) {
    //         if (purchaseType !== null) {
    //             if (purchaseType === 15)
    //                 Expiry_date = tempdate.getDate() + 15;
    //             else
    //                 Expiry_date = tempdate.getDate() + 30;

    //             tempdate.setDate(Expiry_date);
    //         }
    //         else if (purchaseType === null) {
    //             tempdate = null;
    //         }
    //         console.log(tempdate);
    //         Sales.push({
    //             Purchase_date: new Date(),
    //             Expiry_date: tempdate,
    //             BookId: temp[i].BookId,
    //             PurchaseTypeId: purchaseType !== null ? 2 : 3
    //         })
    //     }
    //     console.log(Sales);
    //     let Order = {
    //         TotalPayableAmt: Total,
    //         Status: true,
    //         CustomerId: localStorage.getItem("CustomerId"),
    //         Sales:Sales
    //     }

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(Order)
    //     };
    //     fetch('https://localhost:44356/api/Invoice', requestOptions)
    //         .then(response => response.json())
    //         .then(data => data);
    //     console.log(Order);


    //     // const requestsaleOption = {
    //     //     method: 'POST',
    //     //     headers: { 'Content-Type': 'application/json' },
    //     //     body: JSON.stringify(Sale)
    //     // };
    //     // fetch('https://localhost:44356/api/addtosale', requestsaleOption)
    //     //     .then(response => response.json())
    //     //     .then(data => data);

     }
    const OnRemoveHandler = () => {
        if (PurchaseList.length >= 1) {
            PurchaseList = PurchaseList.map((obj, index) => {
                obj.Id = index + 1;
                return obj;
            })
            setBooks(PurchaseList);
            seterrorMsg("")
        }
        if (Books.length === 1 || PurchaseList.length === 0) {
            seterrorMsg("list should contain at least one item");
        }
    }

    return (

        <div className=' mt-4 ' style={{ height: 400 }}>
            <h3>Invoice</h3>
            <DataGrid
                className='alcenter'
                getRowId={(row) => {
                    return row.id
                    // if (localStorage.getItem("Bookdata") === null) {
                    //     return row.Id;
                    // }
                    // else {
                    //     ;
                    // }
                }}  // to give unique id to each row
                rows={Books}
                columns={columns}
                pageSize={10}
                checkboxSelection
                /*  onSelectionModelChange={(arr) => { console.log(arr); onRowsSelectionHandler(arr) }} */
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    console.log(selectedIDs);
                    PurchaseList = Books.filter((row) =>
                        !selectedIDs.has(row.id)
                    );
                    // console.log(PurchaseList);
                }}
            />
            <div>
                <p style={{ color: '#2866a4' }}>
                    <i>select checkbox of item which you want to remove from list</i>
                </p>
                <Button
                    size="small"
                    onClick={OnRemoveHandler}
                    style={{ paddingLeft: "10px", paddingRight: "10px", fontSize: "12px" }}
                    className='btncolor'>
                    <PlaylistRemoveIcon /> Remove selected
                </Button>
                <p className='text-danger'> {errorMsg}</p>
            </div>
            <div className='mt-4 pt-3 square border '>
                <Container >
                    <Row className="justify-content-md-center" >
                        <Col sm={7} > <b style={{ fontSize: "20px" }}> Total amount to pay =<CurrencyRupeeIcon fontSize='small' />{Total} </b>
                            <p> <i style={{ color: '#2866a4' }}>(include all *Taxes.)</i></p>
                        </Col>
                        <Col >
                            {/* <Button
                                size="large"
                                className='btncolor '
                                onClick={onBuyHandler}>
                                <AccountBalanceWalletIcon fontSize="small" className='me-2' />
                                Pay Now  
                            </Button> */}
                            <PayNowButton onBuyHandlerCall={onBuyHandler} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default InvoiceTable;
  //  rowsPerPageOptions={[5]}
  //  pageSize={5}

  //dependency
  //npm install @material-ui/core --legacy-peer-deps
  //npm install @mui/x-data-grid --legacy-peer-deps
  //npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
  //npm install bootstrap --legacy-peer-deps