import React from "react";
const Pages = ({ productsPerPage, totalProducts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<span onClick={() => paginate(number)} className='page-link'>
						{number}
						</span>
						{/* <a onClick={() => paginate(number)} href="" className='page-link'>
							{number}
						</a> */}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pages;
