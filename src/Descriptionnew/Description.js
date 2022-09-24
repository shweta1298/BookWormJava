import "./Page.css";

import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button, Typography } from "@mui/material";
import React, { Component, useState, useRef, useEffect } from "react";

let tempid = 1;
export default function Description(props) {
	const navigate = useNavigate();
	const [isAvailableForRent, setIsAvailableForRent] = useState(false);

	const [cartadd, setCartadd] = useState(false);
	let rentalValue = 5;
	const [message, setMessage] = useState("");
	//const handleAddToCart = () => { };
	const ref = useRef();
	useEffect(() => {
		console.log(props.object?.purchasetypeses);
		if (props.object?.purchasetypeses?.length > 1) setIsAvailableForRent(true);
	});
	const addtoCart = () => {
		const CustomerId = localStorage.getItem("CustomerId");
		if (CustomerId == null) {
			navigate("/FetchDiscription");
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
				ref.current.textContent = "Added To Cart";
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
				ref.current.textContent = "Add To Cart";
			}
		}
	};

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='body ' width='40%' height='150'>
					<div className='row g-0' width='60%' height='250'>
						<div className='col-md-3'>
							<img
								src={props.object.paths?.bookPath + props.object?.cover}
								id='img1'
								alt='abc'
								className='img-fluid rounded-start'
								width='75%'
								height='330'
							/>
						</div>
						<div className='col-md-5'>
							<div className='card-body col-md-12'>
								<h3
									className='card-title'
									style={{
										fontWeight: "600",
										fontSize: "30px",
										fontFamily: "Raleway",
									}}>
									{props.object.title}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "20px",
										fontFamily: "Raleway",
									}}>
									{props.object?.authors?.authorName}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									{props.object.totalPages}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									Price: ₹{props.object.salePrice}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										color: "#ff3b3f",
										fontFamily: "Raleway",
									}}>
									Rent Price: ₹{props.object.rentPrice} per/day
								</h3>

								<div
									style={{
										marginLeft: "280px",
										marginTop: "130px",
									}}>
									<form hidden={isAvailableForRent ? false : true}>
										<label for='exampleFormControlInput1'>No. of Days: </label>
										<Box sx={{ display: "flex", flexDirection: "row" }}>
											<div
												class='form-group'
												style={{ width: "70px", height: "35px" }}>
												<input
													required
													defaultValue={5}
													type='number'
													class='form-control'
													id='rental-period'
													placeholder='5 days'
													onChange={(e) => {
														rentalValue = e.target.value;
													}}
												/>
											</div>
											<Button
												className='rentbutton'
												sx={{ marginLeft: "10px" }}
												onClick={(e) => {
													if (rentalValue < 5) {
														setMessage(
															"Minimum rental period should be 5 days!"
														);
													} else if (rentalValue > 30) {
														setMessage(
															"Maximum rental period should be 30 days!"
														);
													} else {
														setMessage("");

														//tempid = product.Id;
														//gotoinvoice(product)
														localStorage.setItem("Bookid", props.object.id);
														localStorage.setItem(
															"purchasetypeses",
															rentalValue
														);
														//navigate('/InvoiceTable');
													}
												}}>
												<Typography
													sx={{
														fontFamily: "Segoe UI",
														fontWeight: 500,
														alignSelf: "flex-start",
													}}>
													Rent Now
												</Typography>
											</Button>
										</Box>
										<div>
											<Typography
												sx={{
													fontFamily: "Segoe UI",
													fontWeight: 500,
													alignSelf: "flex-start",
													color: "#ff3b3f",
												}}>
												{message}
											</Typography>
										</div>
									</form>
									{/* prev code */}
									{/* <div>
											<tr>
												<td align='left'>
													<input type='radio' value='15 Days' name='rd' />
													<span> 15 Days &nbsp;</span>
													<input type='radio' value='30 Days' name='rd' />
													<span> 30 Days &nbsp; </span>
												</td>
											</tr>
										</div> */}

									{/* <FormControl sx={{marginRight:"240px", marginBottom:"20px"}} >
										<Select
											className="btncolor2"
											defaultValue={15}
											displayEmpty
											size='small'
											

										>
											<MenuItem value={15}
												onClick={() => {
													//tempid = product.Id;
													//gotoinvoice(product)
													const CustomerId = localStorage.getItem("CustomerId")
													if (CustomerId == null) {
														navigate('/FetchDiscription');
														alert("please login")
														//localStorage.setItem("openlogin",true);
													}
													else {
														localStorage.setItem("Bookid", props.object.id);
														localStorage.setItem("purchaseType", 15)
														navigate('/InvoiceTable');
													}
												}}
											>Rent (15 days)</MenuItem>

											<MenuItem value={30}
												onClick={() => {
													//tempid = product.Id;
													//gotoinvoice(product)
													const CustomerId = localStorage.getItem("CustomerId")
													if (CustomerId == null) {
														navigate('/FetchDiscription');
														alert("please login")
														//localStorage.setItem("openlogin",true);
													}
													else {
														localStorage.setItem("Bookid", props.object.id);
														localStorage.setItem("purchaseType", 30)
														navigate('/InvoiceTable');
													}
												}}
											>Rent (30 days)</MenuItem>
										</Select>

									</FormControl> */}

									<div
										className='btn-toolbar'
										role='toolbar'
										aria-label='Toolbar with button groups'>
										{/* <div
												className='btn-group me-2 '
												role='group'
												aria-label='First group'>
												<button
													type='button'
													className='btn btncolor '
												// onClick={() => {
												// 	tempid = props.object.Id;
												// 	gotoinvoice(product);

												// 	localStorage.setItem("Bookid", props.object.Id);
												// 	localStorage.setItem("purchaseType", 15);
												// 	navigate("/InvoiceTable");
												// }}


												>
													RENT NOW
												</button>
											</div> */}

										<div
											className='btn-group me-2 mt-3 '
											role='group'
											aria-label='Second group'>
											<button
												type='button'
												className='btn btncolor'
												onClick={() => {
													//tempid = product.Id;
													//gotoinvoice(product)
													const CustomerId = localStorage.getItem("CustomerId");
													if (CustomerId == null) {
														navigate("/FetchDiscription");
														alert("please login");
														//localStorage.setItem("openlogin",true);
													} else {
														localStorage.setItem("Bookid", props.object.id);

														navigate("/InvoiceTable");
													}
												}}>
												Buy Now
											</button>
										</div>
									</div>
									<br></br>
									<div
										className='btn-group me-2 '
										role='group'
										aria-label='Third group'>
										<button
											type='button'
											class='btn btncolor btn-lg'
											style={{ marginRight: "240px" }}
											ref={ref}
											onClick={() => {
												tempid = props.object.id;
												addtoCart();
											}}>
											Add To Cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card text-center' style={{ textAlign: "justify" }}>
				<h4>Description</h4>
				<div>{props.object.description}</div>
			</div>
		</div>
	);
}
