import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./products";
import Pages from "./Pages";
import { Box, Grid } from "@mui/material";

import FilterProducts from "./filterProducts";
const ProductList = () => {
	const [products, setProducts] = useState([]);
	let [tempProducts, setTempProducts] = useState([]);

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);
	let [isFiltered, setIsFiltered] = useState(false);

	let filter;
	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			const result = await axios.get(
				"http://localhost:8080/BookWormJ/getBooks/"
			);
			setProducts(result.data);
			// tempProducts = result.data.record;
			setTempProducts(result.data);

			setLoading(false);
			// console.log(products);
			// console.log(tempProducts);
		};
		const setPage = () => {
			fetchProducts();
		};
		setPage();
	}, []);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	tempProducts = tempProducts.slice(indexOfFirstProduct, indexOfLastProduct);
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const handleFiltering = (categoryValues, languageValues, genreValues) => {
		console.log(categoryValues, languageValues, genreValues);
		if (categoryValues.length > 0) {
			for (let i = 0; i < categoryValues.length; i++) {
				filter = products.filter(
					(product) => product.BookCategory.Category === categoryValues[i]
				);
			}
			setTempProducts(filter);
		}

		if (languageValues.length > 0) {
			for (let i = 0; i < languageValues.length; i++) {
				filter = products.filter(
					(product) => product.Language.language === languageValues[i]
				);
			}
			setTempProducts(filter);
		}
		if (genreValues.length > 0) {
			for (let i = 0; i < genreValues.length; i++) {
				filter = products.filter(
					(product) => product.BookCategory.Category === categoryValues[i]
				);
			}
			setTempProducts(filter);
		}
		setIsFiltered(true);
		// setTempProducts(filter);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				size: "50%",
			}}>
			{console.log(tempProducts)}

			<Grid
				container
				// spacing={1}
				direction='row'
				sx={{ marginBlockStart: "30px" }}>
				<Grid
					item
					container
					justifyContent='flex-end'
					alignItems='flex-start'
					xs={4}
					sx={{
						// bgcolor: "blue",
						paddingRight: "80px",
					}}>
					<FilterProducts onSelectCategory={handleFiltering}></FilterProducts>
				</Grid>
				<Grid
					item
					container
					direction='column'
					alignItems='flex-start'
					xs={8}
					sx={
						{
							// bgcolor: "red",
						}
					}>
					<Products products={tempProducts} loading={loading} />
					<Pages
						className='pagination'
						productsPerPage={productsPerPage}
						totalProducts={isFiltered ? tempProducts.length : products.length}
						currentPage={currentPage}
						paginate={paginate}></Pages>
				</Grid>
			</Grid>
		</Box>
	);
};
export default ProductList;
