import React,{useState} from "react";
import Button from "react-bootstrap/Button";

import { Typography, Box } from "@mui/material";
import "./styles.css";

import { useNavigate } from "react-router-dom";
export default function SelectRentDuration(props) {
	const navigate = useNavigate();

	let rentalValue = 5;
	const [message, setMessage] = useState("");
	return (
		<form hidden={props.isSelected ? false : true}>
			<label for='exampleFormControlInput1'>No. of Days: </label>
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<div class='form-group' style={{ width: "70px", height: "35px" }}>
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
						const CustomerId = localStorage.getItem("CustomerId")
						if (CustomerId == null) {
							navigate("/ProductPage");
							alert("please login");
							//localStorage.setItem("openlogin",true);
						} else {
							if (rentalValue < 5) {
								setMessage("Minimum rental period should be 5 days!");
							} else if (rentalValue > 30) {
								setMessage("Maximum rental period should be 30 days!");
							} else {
								setMessage("");

								// tempid = product.id;
								// gotoinvoice(product);
								localStorage.setItem("Bookid", props.data.id);
								localStorage.setItem("purchasetypeses", rentalValue);
								navigate("/InvoiceTable");
							}
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
	);
}
