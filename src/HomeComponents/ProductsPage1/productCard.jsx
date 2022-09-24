import "bootstrap/dist/css/bootstrap.css";
import {
	Card,
	CardMedia,
	Box,
	CardContent,
	Typography,
	CardActions,
	Stack,
	Grid,
} from "@mui/material";
import "./styles.css";
import Button from "react-bootstrap/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import SelectRentDuration from "./selectButton";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

let tempid = -1;
const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const [cartadd, setCartadd] = useState(false);

	const [isAvailableForRent, setIsAvailableForRent] = useState(false);

	const ref = useRef();

	const redirectToDiscription = () => {
		//localStorage.setItem("Bookdata",bookobject)
		localStorage.setItem("Bookid", tempid);
		navigate("/FetchDiscription");
	};

	useEffect(() => {
		console.log(product.purchasetypeses);
		if (product.purchasetypeses.length > 1) setIsAvailableForRent(true);
	});
	const addtoCart = () => {
		const CustomerId = localStorage.getItem("CustomerId");
		if (CustomerId == null) {
			navigate("/ProductPage");
			alert("please login");
			//localStorage.setItem("openlogin",true);
		} else {
			setCartadd(!cartadd);
			if (cartadd === false) {
				fetch("https://localhost:44356/api/AddtoCart", {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						BookId: tempid,
						CustomerId: CustomerId,
						PurchaseTypeId: 2,
					}),
				})
					.then((res) => res.json())
					.then((result) => {
						//console.warn("result", result);
						console.log(result);
					});
				ref.current.textContent = "ADDED TO CART";
			} else {
				fetch(
					"https://localhost:44356/api/RemoveFromCart/?CustomerId=" +
						CustomerId +
						"&BookId=" +
						tempid,
					{ method: "Delete" }
				)
					.then((response) => response.json())
					.then((response) => {
						//console.warn("response", response);
						console.log(response);
					});
				ref.current.textContent = "ADD TO CART";
			}
		}
	};

	// const gotoinvoice = (book) => {
	// 	localStorage.setItem("Bookdata", book);
	// 	localStorage.setItem("purchaseType", {
	// 		purchaseType: "Buy",
	// 		rentalPackage: null,
	// 	});
	// 	navigate("/InvoiceTable");
	// };

	return (
		<Card
			variant='outlined'
			sx={{
				width: "800px",
				height: "250px",
				display: "flex",
				margin: "6px",

				border: "none",
				boxShadow: "0px 10px 12px -12px rgba(0.4,0.4,0.4,0.4)",
			}}>
			<CardMedia
				component='img'
				slot=''
				image={product?.paths?.bookPath + product?.cover}
				//image={product.Cover}
				//image={this.props.product.Cover}
				alt='bookcover'
				sx={{ width: "160px", maxHeight: "250px", padding: "5px" }}
				onClick={() => {
					tempid = product.id;
					redirectToDiscription();
				}}
			/>

			<Box
				sx={{ display: "flex", flexDirection: "column" }}
				onClick={() => {
					tempid = product.id;
					redirectToDiscription();
				}}>
				<CardContent component='div' sx={{ flex: "1 0 auto", width: "250px" }}>
					<Typography
						variant='h5'
						sx={{ fontWeight: "400", fontFamily: "Raleway", fontSize: "25px" }}>
						{product.title}
					</Typography>
					<Typography
						variant='subtitle1'
						sx={{ fontWeight: "300", fontFamily: "Raleway", fontSize: "18px" }}>
						{product.authors?.authorName}
					</Typography>
					<Grid container spacing={0.5}>
						<Grid item>
							{/* <FontAwesomeIcon icon={solid("indian-rupee-sign")} size='sm' /> */}
						</Grid>

						<Typography
							variant='subtitle2'
							sx={{
								fontSize: "15px",
								fontWeight: "600",
								marginLeft: "35px",
								marginTop: "40px",
							}}>
							Price: ₹{product.SalePrice}
						</Typography>
						<Typography
							hidden={isAvailableForRent ? false : true}
							variant='subtitle2'
							sx={{
								fontSize: "15px",
								fontWeight: "600",
								marginLeft: "40px",
								color: "#ff3b3f",
							}}>
							Rent Price: ₹{product.RentPrice}{" "}
							<span style={{ fontSize: "15px" }}>per/day</span>
						</Typography>
					</Grid>
				</CardContent>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					// padding: "20px",
					justifyContent: "center",
					marginLeft: "60px",
				}}>
				<CardActions component='div'>
					<Stack spacing={1.5}>
						<Button
							className='btncolor'
							ref={ref}
							onClick={() => {
								tempid = product.id;
								addtoCart();
							}}
							// onClick={() => {
							// 	this.changeText("ADDED TO CART");
							// }}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2}>
									<ShoppingCartIcon className='btnIcon me-1' />
								</Grid>
								<Grid item xs={10}>
									<Typography className='btnLabel ms-1'>ADD TO CART</Typography>
								</Grid>
							</Grid>
						</Button>
						<Button
							className='btncolor'
							// onClick={() => {
							// 	//tempid = product.Id;
							// 	//gotoinvoice(product)

							// 	localStorage.setItem("Bookid", product.Id);
							// 	localStorage.setItem("purchaseType", JSON.stringify({
							// 		purchaseType: "Buy",
							// 		rentalPackage: null

							// 	}))
							// 	navigate('/InvoiceTable');
							// }}
							onClick={() => {
								//tempid = product.Id;
								//gotoinvoice(product)
								const CustomerId = localStorage.getItem("CustomerId");
								if (CustomerId == null) {
									navigate("/ProductPage");
									alert("please login");
									//localStorage.setItem("openlogin",true);
								} else {
									localStorage.setItem("Bookid", product.id);

									navigate("/InvoiceTable");
								}
							}}>
							<Grid container spacing={0.5}>
								<Grid item xs={2}>
									<SellIcon className='btnIcon ' />
								</Grid>
								<Grid item xs={10}>
									<Typography className='btnLabel '>BUY NOW</Typography>
								</Grid>
							</Grid>
						</Button>

						<SelectRentDuration
							data={product}
							isSelected={isAvailableForRent}></SelectRentDuration>
					</Stack>
				</CardActions>
			</Box>
		</Card>
	);
};
//}

export default ProductCard;
