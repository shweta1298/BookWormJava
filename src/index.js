import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Contactus from './Contactus';
import Home from './HomeComponents/Home';
import Registration from './Registration/Registration';
import FetchDiscription from './Descriptionnew/FetchDiscription';
import Shelf from './Shelf/Shelf';
import Cart2 from './Components/Cart2';
import ProductPage from './ProductsPage/productPage';
import InvoiceTable from './Invoice/InvoiceTable';
import Pages from './ProductsPage/Pages'
//import LoginPopUp from './NavBar/LoginPopUp'

//import NavigationBar from './NavBar/NavigationBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="Registration" element={<Registration />} />
                <Route path="FetchDiscription" element={<FetchDiscription/>}/>
                <Route path='Shelf' element={<Shelf/>}/>
                <Route path='Cart2' element={<Cart2/>}/>
                <Route path='ProductPage' element={<ProductPage/>}/>
                <Route path='InvoiceTable' element={<InvoiceTable/>}/>
                <Route path='Pages' element={<Pages/>}/>
                {/* <Route path='LoginPopUp' element={<LoginPopUp/>}/> */}
                </Route>
        </Routes>
    </BrowserRouter>





);


reportWebVitals();
