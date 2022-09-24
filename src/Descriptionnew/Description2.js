import React from "react";
import "./Page.css";

import { useNavigate } from "react-router-dom";

let tempid = 1;
export default function Description(props) {
	const navigate = useNavigate();

	const handleAddToCart = () => {};
	const gotoinvoice = (book) => {

		localStorage.setItem("Bookdata", book);
		localStorage.setItem("purchaseType", {
			purchaseType: "Buy",
			rentalPackage: null

		})
		navigate('/InvoiceTable');
	}


	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='body ' width='40%' height='150'>
					<div className='row g-0' width='60%' height='250'>
						<div className='col-md-3'>
							<img
								src={props.object.Path?.BookPath + props.object?.Cover}
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
									{props.object.Title}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "20px",
										fontFamily: "Raleway",
									}}>
									{props.object?.Author?.Author_Name}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									{props.object.TotalPages}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									Price: ₹{props.object.SalePrice}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										color: "#ff3b3f",
										fontFamily: "Raleway",
									}}>
									Rent Price: ₹{props.object.RentPrice} per/day
								</h3>

								<div
									style={{
										marginLeft: "280px",
										marginTop: "130px",
									}}>
									<div>
										<tr>
											<td align='left'>
												<input type='radio' value='15 Days' name='rd' />
												<span> 15 Days &nbsp;</span>
												<input type='radio' value='30 Days' name='rd' />
												<span> 30 Days &nbsp; </span>
											</td>
										</tr>
									</div>
									<div
										className='btn-toolbar'
										role='toolbar'
										aria-label='Toolbar with button groups'>
										<div
											className='btn-group me-2 '
											role='group'
											aria-label='First group'>
											<button
												type='button'
												className='btn btncolor '
												onClick={() => {
													navigate("/InvoiceTable");
												}}>
												RENT NOW
											</button>
										</div>
										<div
											className='btn-group me-2 '
											role='group'
											aria-label='Second group'>
											<button
												type='button'
												className='btn btncolor'
												onClick={() => {
													navigate("/InvoiceTable");
												}}>
												BUY NOW
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
											onClick={handleAddToCart}>
											ADD TO CART
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card text-center' style={{textAlign : "justify"}}>
				<h4>Description</h4>
				<div>{props.object.Description}</div>
			</div>
		</div>
	);
}
