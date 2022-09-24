import React from 'react';
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import {
    Card,
    CardMedia,
    Box,
    CardContent,
    Typography,
    CardActions,
    Stack,
    Button,
    Grid,
    Container,
} from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import './Cart.css';
import RentButton from './RentButton';
import { useNavigate } from 'react-router-dom';



let tempid = -1;
let temp=[];
export default function Cart2() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    //const { Id } = useParams();

    const CustomerId = localStorage.getItem("CustomerId");

    useEffect(() => {
        localStorage.removeItem("Bookid");
       fetch("https://localhost:44356/api/GetFromCart/" + CustomerId)
            .then(res => res.json())
            .then((result) => {
                    setCart(result)
                }
            );
            
    },[]);

    const onProceedToPay = () => {
       // localStorage.setItem("purchaseType",PurchaseSelection)
        //Navigate("/")
        navigate('/InvoiceTable');
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((Book) => Book.BookId !== tempid))
        fetch('https://localhost:44356/api/RemoveFromCart/?CustomerId=' + CustomerId + '&BookId=' + tempid,
            { method: 'Delete' })
            .then(response => response.json())
            .then(response => {

                //console.warn("response", response);
                console.log(response);
            });
    }
   
    if (cart.length !== 0)
        return (
            <Container sx={{
                width: "100%", display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                {cart.map((data, index) =>
                    <Card
                        variant='outlined'
                        sx={{
                            width: "800px",
                            height: "300px",
                            display: "flex",
                            margin: "6px",
                            border: "none",
                            boxShadow: "0px 10px 12px -12px rgba(0.4,0.4,0.4,0.4)",
                        }}>
                        <CardMedia
                            component='img'
                            image={data.Book.Path.BookPath + data.Book.Cover}
                            alt='bookcover'
                            sx={{ maxWidth: "200px", maxHeight: "300px", padding: "5px" }}
                        />

                        <Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                            <CardContent
                                component='div'
                                sx={{ flex: "1 0 auto", width: "350px" }}>
                                <Typography variant='h5' sx={{ fontWeight: "400" }}>
                                    {data.Book.Title}
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: "300" }}>
                                    {data.Book.Author.Author_Name}
                                </Typography>
                                <Grid container spacing={0.5}>
                                    <Grid item xs={2}>
                                        <Typography
                                            variant='subtitle2'
                                            sx={{ fontSize: "20px", fontWeight: "600" }}>
                                            ₹{data.Book.SalePrice}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "20px",
                                justifyContent: "center",
                            }}>
                            <CardActions component='div'>
                                <Stack spacing={1.5}>
                                    <Button
                                        onClick={() => {
                                            tempid = data.BookId;
                                            removeFromCart()
                                        }}
                                       // eventKey={data.Book.BookCategory.Id}
                                        variant='contained'
                                        size='small'
                                        startIcon={<RemoveShoppingCartIcon />}

                                        sx={{
                                            width: "200px",
                                            height: "40px",
                                            bgcolor: "#FF3B3F",
                                            "&:hover": {
                                                backgroundColor: "#000000",
                                            },
                                        }}>
                                        <Typography
                                            variant='p'
                                            sx={{ color: "white", fontWeight: "bolder" }}>
                                            Remove From Cart
                                        </Typography>
                                    </Button>
                                        {/* <RentButton/> */}
                                </Stack>
                            </CardActions>
                        </Box>
                    </Card>
                )}
                <Button
                    size="large"
                    className='btncolor ps-3 pe-3 mt-4 mb-5'
                    onClick={onProceedToPay}
                >
                    <ShoppingCartCheckoutIcon className='me-2' />
                    <Typography
                        variant='p'
                        sx={{ color: "white", fontWeight: "bolder" }}>
                        Proceed To Get ALL
                    </Typography>
                </Button>
            </Container>
        );
    else {
        return (
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
                <h1 style={{ color: 'lightgray', fontWeight: "bolder", textAlign: "center" }}>
                    <ProductionQuantityLimitsIcon sx={{ fontSize: 50 }} className='me-2' /><br /> Cart is Empty!</h1>
            </div>
        );
    }

}

















// import React from 'react';
// import { useState, useEffect } from "react";
// import { Navigate, useParams } from "react-router-dom";
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cart.css';
// import {
//     Card,
//     CardMedia,
//     Box,
//     CardContent,
//     Typography,
//     CardActions,
//     Stack,
//     Button,
//     Grid,
//     Container,
// } from "@mui/material";

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import './Cart.css';
// import RentButton from './RentButton';
// import { purple } from '@material-ui/core/colors';


// let tempid = -1;
// let temp=[];
// export default function Cart2() {
//     const [cart, setCart] = useState([]);
//     // let enableList=[];
//     // console.log(cart.length)
//     // for (let i = 0; i < cart.length; i++)
//     //     enableList.push({ checked: false });
//     const { Id } = useParams();
//     const [PurchaseSelection, setPurchaseSelection] = React.useState([]);
  
//     let tempSelection = []
//     const intializePurchaseType = () => {
//         if (temp.length !== 0) {
//             for (let i = 0; i < temp.length; i++)
//                 tempSelection.push({ id: i, purchaseType: "Buy", rentalPackage: null });
//             setPurchaseSelection(tempSelection);
//         }
//     }

//     //const [isRented,setIsRented]=useState(enableList);
//     //const [isRented,setIsRented]=useState(false)



//     const CustomerId = 3; // localStorage.getItem("CustomerId");
//     //console.log(CustomerId);


//     useEffect(() => {
        
//        fetch("https://localhost:44393/api/Carts/" + CustomerId)
//             .then(res => res.json())
//             .then((result) => {
//                     setCart(result)
//                 }
//             );
//     },[]);
//     const onProceedToPay = () => {
//        // localStorage.setItem("purchaseType",PurchaseSelection)
//         //Navigate("/")
//     }

//     const removeFromCart = (id) => {
//         setCart(cart.filter((Book) => Book.BookId !== tempid))
//         fetch('https://localhost:44357/api/RemoveFromCart/?CustomerId=' + CustomerId + '&BookId=' + tempid,
//             { method: 'Delete' })
//             .then(response => response.json())
//             .then(response => {

//                 //console.warn("response", response);
//                 //console.log(response);
//             });
//     }
//    // const handleSwitch = (event, index) => {
//         // if(event.target.value==false)
//         //    event.target.value=true; 
//         // else
//         // event.target.value= false;
//         // if(isRented.length!==0)
//         // enableList=isRented;
//         // console.log("handle swithe --->"+enableList)
//         //  console.log(event.target.checked)
//         // enableList[index].checked=event.target.checked;
//         //console.log(enableList[index].checked)
//         // setIsRented(enableList);
//   //  }
//     // const handleChange = (event, index) => {
        
//     //    // console.log(tempSelection)
//     //    // tempSelection=PurchaseSelection;
//     //    // console.log(tempSelection)
//     //     tempSelection[index]=event.target.value
//     //    // setPurchaseSelection(tempSelection);
//     //     //setShowValue(event.target.value);
//     // };

//     if (cart.length !== 0)
//         return (
//             <Container sx={{
//                 width: "100%", display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column"
//             }}>
//                 {cart.map((data, index) =>
//                     <Card
//                         variant='outlined'
//                         sx={{
//                             width: "800px",
//                             height: "300px",
//                             display: "flex",
//                             margin: "6px",

//                             border: "none",
//                             boxShadow: "0px 10px 12px -12px rgba(0.4,0.4,0.4,0.4)",
//                         }}>

//                         <CardMedia
//                             component='img'


//                             image={data.Book.Path.BookPath + data.Book.Cover}

//                             alt='bookcover'
//                             sx={{ maxWidth: "200px", maxHeight: "300px", padding: "5px" }}
//                         />

//                         <Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
//                             <CardContent
//                                 component='div'
//                                 sx={{ flex: "1 0 auto", width: "350px" }}>

//                                 <Typography variant='h5' sx={{ fontWeight: "400" }}>
//                                     {data.Book.Title}
//                                 </Typography>

//                                 <Typography variant='subtitle1' sx={{ fontWeight: "300" }}>
//                                     {data.Book.Author.Author_Name}
//                                 </Typography>

//                                 <Grid container spacing={0.5}>
//                                     <Grid item xs={2}>
//                                         <Typography
//                                             variant='subtitle2'
//                                             sx={{ fontSize: "20px", fontWeight: "600" }}>
//                                             ₹{data.Book.SalePrice}
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </CardContent>
//                         </Box>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 padding: "20px",
//                                 justifyContent: "center",
//                             }}>
//                             <CardActions component='div'>
//                                 <Stack spacing={1.5}>
//                                     <Button
//                                         onClick={() => {
//                                             tempid = data.BookId;
//                                             removeFromCart()
//                                         }}
//                                        // eventKey={data.Book.BookCategory.Id}
//                                         variant='contained'
//                                         size='small'
//                                         startIcon={<RemoveShoppingCartIcon />}

//                                         sx={{
//                                             width: "200px",
//                                             height: "40px",
//                                             bgcolor: "#FF3B3F",
//                                             "&:hover": {
//                                                 backgroundColor: "#000000",
//                                             },
//                                         }}>
//                                         <Typography
//                                             variant='p'
//                                             sx={{ color: "white", fontWeight: "bolder" }}>
//                                             Remove From Cart
//                                         </Typography>
//                                     </Button>
//                                         <RentButton/>
//                                     {/* <RentButton  handleChange={handleChange} PurchaseSelection={PurchaseSelection[index]} index={index} /> */}
//                                     {/* <Switch key={index}  onChange={(event)=>handleSwitch(event,index)}  /> */}
//                                 </Stack>
//                             </CardActions>
//                         </Box>
//                     </Card>
//                 )}
//                 <Button
//                     size="large"
//                     className='btncolor ps-3 pe-3 mt-4 mb-5'
//                     onClick={onProceedToPay}
//                 >
//                     <ShoppingCartCheckoutIcon className='me-2' />
//                     <Typography
//                         variant='p'
//                         sx={{ color: "white", fontWeight: "bolder" }}>
//                         Proceed To Get ALL
//                     </Typography>
//                 </Button>
//             </Container>
//         );
//     else {
//         return (
//             <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
//                 <h1 style={{ color: 'lightgray', fontWeight: "bolder", textAlign: "center" }}>
//                     <ProductionQuantityLimitsIcon sx={{ fontSize: 50 }} className='me-2' /><br /> Cart is Empty!</h1>
//             </div>
//         );
//     }

// }


