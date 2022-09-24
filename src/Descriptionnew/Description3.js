import React, { Component, useState, useEffect } from "react";
import "./Page.css";
import {
	Masonry,
	Item,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

let tempid = 1;
export default function Description(props) {
	const navigate = useNavigate();
	
	const handleAddToCart = () => {};



	//console.log(this.state.props)
	return (
		<div>
			{/* <script language="javascript">
                function setImageSrc()
                {
                 img1=document.getElementById('img1');
                img1.src=props.Path.BookPath + props.Cover;
                    }
            </script> */}
			{/* {this.state.props.map(bookdata => */}
			{console.log(props)}
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
									<h3 className='card-title'>Book name:{props.object.Title}</h3>
									<h3 className='card-title'>
										Author name:{props.object?.Author?.Author_Name}
									</h3>
									<p className='card-text'>
										<h5>No of Pages:-{props.object.Total_Pages}</h5>
									</p>
									<span className='actualprice themecolor font-weight-bold'>
										<label id='ctl00_phBody_ProductDetail_lblourPrice'>
											<h3>₹{props.object.BasePrice}</h3>
										</label>
									</span>
									<div style={{ marginLeft: "280px", marginTop: "130px" }}>
										<div>
											<tr>
												<td align='left'>
													<input type='radio' value='15 Days' name='rd' />
													<span>15 Days &nbsp;</span>
													<input type='radio' value='30 Days' name='rd' />{" "}
													<span>30 Days &nbsp; </span>
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
													onClick={() => {navigate('/InvoiceTable');}}>
													RENT NOW
												</button>
											</div>
											<div
												className='btn-group me-2 '
												role='group'
												aria-label='Second group'>
												<button
													type='button'
													className='btn btncolor ms-4'
													onClick={() => {navigate('/InvoiceTable');}}>
													BUY NOW
												</button>
											</div>
										</div>
										<br></br>
										<div className='btn-toolbar' role='toolbar'>
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
				<div className='card text-center '>
					<h4>Description</h4>
					<div>
						<p className='card-text col-123 '>{props.object.Description}</p>
					</div>
				</div>
			</div>

			{/* )}  */}
		</div>
	);
}
