import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const RentButton = (props) => {
	return (
		<FormControl >
			<Select
				className="btncolor"
				defaultValue={-1}
				displayEmpty
				size='small'
			>
				<MenuItem value={-1} >
					Buy
				</MenuItem>
				<MenuItem value={15}>Rent (15 days)</MenuItem>
				<MenuItem value={30}>Rent (30 days)</MenuItem>
			</Select>

		</FormControl>

	);
};

export default RentButton;




// import React from "react";
// // import Button from "react-bootstrap/Button";
// // import ButtonGroup from "react-bootstrap/ButtonGroup";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import { Typography } from "@mui/material";
// // import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Switch from '@mui/material/Switch';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// // import { LibraryAdd } from "@mui/icons-material";
// const RentButton = (props) => {
// 	return (
// 		<FormControl >
// 			<Select
// 				className="btncolor"
// 				defaultValue={-1}
// 				//onChange={(e)=>props.handleChange(e,props.index)}
// 				displayEmpty
// 				size='small'
// 			>
// 				{/* {console.log(props.PurchaseSelection.purchaseType)} */}
// 				<MenuItem value={-1} >
// 					Buy
// 				</MenuItem>
// 				<MenuItem value={15}>Rent (15 days)</MenuItem>
// 				<MenuItem value={30}>Rent (30 days)</MenuItem>
// 			</Select>
// 			{/* <Dropdown size='mt-4' as={ButtonGroup} >
// 			<Button className='btncolor' size='small' disabled={!props.isRented}>
// 				<LibraryAddIcon className='btnIcon me-2'  />
// 				<Typography variant='p' sx={{  }}>
// 					Rent Now
// 				</Typography>
// 			</Button>

// 			<Dropdown.Toggle
// 				split
// 				size='sm'
// 				className='btncolor'
// 				id='dropdown-split-basic'
// 				disabled={!props.isRented}
// 			/>

// 			<Dropdown.Menu variant='dark'>
// 				<Dropdown.Item href='#/action-1'>15 Days</Dropdown.Item>
// 				<Dropdown.Item href='#/action-2'>20 Days</Dropdown.Item>
// 			</Dropdown.Menu>
// 		</Dropdown>
// 	 */}

// 		</FormControl>

// 	);
// };

// export default RentButton;
