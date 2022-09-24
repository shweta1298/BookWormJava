import React from "react";
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button,
	Stack,
	Slider,
	Box,
	Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";

const FilterProducts = ({ onSelectCategory }) => {
	const [category, setCategory] = useState([]);
	const [language, setLanguage] = useState([]);
	const [genres, setGenres] = useState([]);
	let [isSelected, setIsSelected] = useState(false);

	const prices = [
		{
			value: 0,
			label: "0 Rs.",
		},
		{
			value: 500,
			label: "500 Rs.",
		},
		{
			value: 1000,
			label: "1000 Rs.",
		},
		{
			value: 1500,
			label: "1500 Rs.",
		},
		{
			value: 2000,
			label: "2000 Rs.",
		},
	];

	function valuetext(value) {
		return `Rs.${value}`;
	}
	// console.log({ category, language, genres });
	const handleResetFilters = (event) => {
		setCategory([]);
		setLanguage([]);
		setGenres([]);
	};
	const handleCategoryChange = (event) => {
		const index = category.indexOf(event.target.value);
		if (index === -1) {
			setCategory([...category, event.target.value]);
			setIsSelected(true);
		} else {
			setCategory(
				category.filter((category) => category !== event.target.value)
			);
			if (category.length < 1) setIsSelected(false);
		}
	};

	const handleLanguageChange = (event) => {
		const index = language.indexOf(event.target.value);
		if (index === -1) {
			setLanguage([...language, event.target.value]);
		} else {
			setLanguage(
				language.filter((language) => language !== event.target.value)
			);
		}
	};
	const handleGenreChange = (event) => {
		const index = genres.indexOf(event.target.value);
		if (index === -1) {
			setGenres([...genres, event.target.value]);
		} else {
			setGenres(genres.filter((genre) => genre !== event.target.value));
		}
	};

	return (
		<div>
			{/* {console.log("if not in array cond", category)} */}
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<FilterAltIcon />
				</Grid>
				<Grid item xs={10}>
					<Typography variant='h5' sx={{ fontWeight: "500" }}>
						Filter
					</Typography>
				</Grid>
			</Grid>

			<Accordion
				sx={{
					marginBlock: "8px",

					width: "150px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Book Type
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={category.includes("E-Book")}
										onChange={handleCategoryChange}
										name='E-Book'
										value='E-Book'
									/>
								}
								label='E-Book'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={category.includes("Audiobook")}
										onChange={handleCategoryChange}
										name='Audiobook'
										value='Audiobook'
									/>
								}
								label='Audiobook'
							/>
						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "150px",
					marginBlock: "8px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Language
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("English")}
										onChange={handleLanguageChange}
										name='English'
										value='English'
									/>
								}
								label='English'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("Hindi")}
										onChange={handleLanguageChange}
										name='Hindi'
										value='Hindi'
									/>
								}
								label='Hindi'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("Marathi")}
										onChange={handleLanguageChange}
										name='Marathi'
										value='Marathi'
									/>
								}
								label='Marathi'
							/>
						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "150px",
					marginBlock: "8px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Genre
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Fantasy")}
										onChange={handleGenreChange}
										name='Fantasy'
										value='Fantasy'
									/>
								}
								label='Fantasy'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Sci-Fi")}
										onChange={handleGenreChange}
										name='Sci-Fi'
										value='Sci-Fi'
									/>
								}
								label='Sci-Fi'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Dystopian")}
										onChange={handleGenreChange}
										name='Dystopian'
										value='Dystopian'
									/>
								}
								label='Dystopian'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Action/Adventure")}
										onChange={handleGenreChange}
										name='Action/Adventure'
										value='Action/Adventure'
									/>
								}
								label='Action/Adventure'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Mystery")}
										onChange={handleGenreChange}
										name='Mystery'
										value='Mystery'
									/>
								}
								label='Mystery'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Horror")}
										onChange={handleGenreChange}
										name='Horror'
										value='Horror'
									/>
								}
								label='Horror'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Thriller/Suspense")}
										onChange={handleGenreChange}
										name='Thriller/Suspense'
										value='Thriller/Suspense'
									/>
								}
								label='Thriller/Suspense'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Romance")}
										onChange={handleGenreChange}
										name='Romance'
										value='Romance'
									/>
								}
								label='Romance'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Biography")}
										onChange={handleGenreChange}
										name='Biography'
										value='Biography'
									/>
								}
								label='Biography'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Self-help")}
										onChange={handleGenreChange}
										name='Self-help'
										value='Self-help'
									/>
								}
								label='Self-help'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Fiction")}
										onChange={handleGenreChange}
										name='Fiction'
										value='Fiction'
									/>
								}
								label='Fiction'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Treatise")}
										onChange={handleGenreChange}
										name='Treatise'
										value='Treatise'
									/>
								}
								label='Treatise'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Non-fiction")}
										onChange={handleGenreChange}
										name='Non-fiction'
										value='Non-fiction'
									/>
								}
								label='Non-fiction'
							/>

						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>

			<Stack>
				<Button
					sx={{ width: "150px", marginTop: "20px" }}
					disabled={isSelected ? false : true}
					className='applyfilterbtn'
					onClick={() => onSelectCategory(category, language, genres)}>
					Apply Filters
				</Button>
				<Button
					variant='outlined'
					sx={{ width: "150px", marginTop: "10px" }}
					className='resetbtn me-3'
					onClick={handleResetFilters}>
					Reset Filters
				</Button>
			</Stack>
		</div>
	);
};

export default FilterProducts;
