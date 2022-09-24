import React from "react";
import { CircularProgress } from "@mui/material";

import ProductCard from "./productCard";
const Products = ({ products, loading }) => {
	if (loading) return <CircularProgress color='primary' />;
	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
