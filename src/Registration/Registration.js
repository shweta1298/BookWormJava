import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import * as yup from 'yup';
import 'yup-phone';
import styled from './Registration.module.css';
//import ResponsiveDatePickers from './Registration/ResponsiveDatePickers';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dob: '',
    emailId: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    password: ''
};


function Registration() {
    const navigate = useNavigate();
    const ref = useRef(null);
    const [formData, setFormData] = useState(initialValues);

    const [message, setMessage] = useState("");

    const handleChange2 = (e) => {
       
        fetch('http://localhost:8080/BookWormJ/checkUsername', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.target.value)
            }).then(res=>res.json()).then((result) => {
                //console.warn("result", result);
                console.log(result);
                if(result===true){
                        setMessage("User already existed");
                }else{
                    setMessage("");
                }
               
            })

        //console.log(e.target.value);
    }

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('change', handleChange2);
    });

   

   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = 
    useFormik({
        initialValues,
        onSubmit: (values, action,) => {
            console.log(values);
            
            setFormData( values/* {
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                dob: values.dob, 
                emailId: values.emailId,
                addressLine1: values.addressLine1,
                addressLine2: values.addressLine2,
                city: values.city,
                country: values.country,
                password: values.password
            } */)
    
            fetch('http://localhost:8080/BookWormJ/Customer', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((result) => {
                console.warn("result", result);
               
            })


            action.resetForm(); 
            navigate('/');
            alert("Registeration Successfully done!")

        },

        validationSchema: yup.object({
            firstName: yup.string()
                .min(3, 'name should be more than 3 characters')
                .max(20, 'name should not be more than 20 characters')
                .required('Please Enter Name'),

            lastName: yup.string()
                .min(3, 'Last name should be more than 3 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter Last Name'),

            phoneNumber: yup.string()
                .phone(null, true, "Invalid phone number"),

            dob: yup.date()
                .required('Required'),

            emailId: yup.string()
                .email('Invalid email address')
                .required('Please Enter Email Id'),

            addressLine1: yup.string()
                .min(3, 'Address Line 1 should be more than 3 characters')
                .max(50, 'Address Line 1 should not be more than 20 characters')
                .required('Please Enter Address Line 1'),

            addressLine2: yup.string()
                .min(3, 'Last name should be more than 3 characters')
                .max(50, 'Last name should not be more than 50 characters')
                .required('Please Enter Address Line 2'),

            city: yup.string()
                .min(1, 'Last name should be more than 1 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter city '),

            country: yup.string()
                .min(2, 'Last name should be more than 2 characters')
                .max(20, 'Last name should not be more than 20 characters')
                .required('Please Enter country '),

            password: yup.string()
                .min(8, "Pssword must be more than 8 characters")
                .required("password is required"),

            confirmpassword: yup.string()
                .required('password is required')
                .oneOf([yup.ref('password')], 'password must be match'),

        }),

        // onSubmit: values => {
        //     alert(
        //         'Registration Form Submitted \n ' + JSON.stringify(values)
        //     );
        // }
        // ---------------------------------------------------------------------

    });

    return (

        <div className="container col-sm-6 mt-3 mb-3"  style={{ backgroundColor: "#fff6ff"}}>
            <div className="row  mt border border-secondary=">
                <div className="col-sm-4" style={{backgroundColor:"#FF3B3F"}}>
                    <h2 className="mt-3 text-light">Get Started</h2>
                    <p className="ms-2 mt-3 text-light">SignUp for free to get access of world of e-Books and Audio Books.</p>
                </div>


                <div className="col-sm-6 m-3" >
                    <h2>Register</h2>
                    <p>Enter your Details</p>

                    <form onSubmit={handleSubmit}>

                        <div className="form" style={{textAlign : "left"}}>

                            <label htmlFor="firstName"> First Name </label>
                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter firstName" onChange={handleChange} onBlur={handleBlur}
                                value={values.firstName}></input>
                        </div>
                        <p>  {touched.firstName && errors.firstName ?
                            <span style={{ color: 'red' }} >{errors.firstName}</span> : null}</p>

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="lastName"> Last Name </label>
                            <input type="text" className="form-control" id="lastName" name="lastName"  placeholder="Enter Last Name"  onChange={handleChange} onBlur={handleBlur}
                                value={values.lastName}></input>
                        </div>
                        <p>  {touched.lastName && errors.lastName ?
                            <span style={{ color: 'red' }} >{errors.lastName}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="phoneNumber"> Phone Number </label>
                            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" onChange={handleChange} onBlur={handleBlur}
                                value={values.phoneNumber}></input>
                        </div>
                        <p>  {touched.phoneNumber && errors.phoneNumber ?
                            <span style={{ color: 'red' }} >{errors.phoneNumber}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="dob"> Date of Birth </label>
                            <input type="date" className="form-control" id="dob" name="dob" placeholder="Enter Date of Birth" onChange={handleChange} onBlur={handleBlur}
                                value={values.dob}></input>
                        </div>
                        <p>  {touched.dob && errors.dob ?
                            <span style={{ color: 'red' }} >{errors.dob}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="emailId"> Email Id </label>
                            <input type="text" ref={ref} className="form-control" id="emailId" name="emailId" placeholder="Enter Email Id" onChange={handleChange} onBlur={handleBlur}
                                value={values.emailId}></input>
                        </div>
                        <span style={{ color: 'red' }} >{message}</span>
                        <p>  {touched.emailId && errors.emailId ?
                            <span style={{ color: 'red' }} >{errors.emailId}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="addressLine1"> Address Line 1 </label>
                            <input type="text" className="form-control" id="addressLine1" name="addressLine1" placeholder="Enter Address Line 1" onChange={handleChange} onBlur={handleBlur}
                                value={values.addressLine1}></input>
                        </div>
                        <p>  {touched.addressLine1 && errors.addressLine1 ?
                            <span style={{ color: 'red' }} >{errors.addressLine1}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="addressLine2"> Address Line 2 </label>
                            <input type="text" className="form-control" id="addressLine2" name="addressLine2" placeholder="Enter Address Line 2" onChange={handleChange} onBlur={handleBlur}
                                value={values.addressLine2}></input>
                        </div>
                        <p>  {touched.addressLine2 && errors.addressLine2 ?
                            <span style={{ color: 'red' }} >{errors.addressLine2}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="city">city</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter city" name="city" onChange={handleChange} onBlur={handleBlur}
                                value={values.city}></input>
                        </div>
                        <p>  {touched.city && errors.city ?
                            <span style={{ color: 'red' }} >{errors.city}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="country ">country</label>
                            <input type="text" className="form-control" id="country" placeholder="Enter country" name="country" onChange={handleChange} onBlur={handleBlur}
                                value={values.country}></input>
                        </div>
                        <p>  {touched.country && errors.country ?
                            <span style={{ color: 'red' }} >{errors.country}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="password"> password </label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={handleChange} onBlur={handleBlur}
                                value={values.password}></input>
                        </div>
                        <p>  {touched.password && errors.password ?
                            <span style={{ color: 'red' }} >{errors.password}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="form"  style={{textAlign : "left"}}>
                            <label htmlFor="confirmpassword">Confirm password</label>
                            <input type="password" className="form-control" id="confirmpassword" placeholder="Enter Confirm password" onChange={handleChange} onBlur={handleBlur}
                                value={values.confirmpassword}></input>
                        </div>
                        <p>  {touched.confirmpassword && errors.confirmpassword ?
                            <span style={{ color: 'red' }} >{errors.confirmpassword}</span> : null}</p>
                        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* <button type="submit"> Sign up</button> */}
                        <input class="btn btn-primary" className={styled.btncolor} type="submit" value="Submit"></input>


                        {/* <input class="btn btn-primary" className={styled.btncolor} type="reset" onClick={resetForm} value="reset"></input> */}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;


  //style={{ display: 'flex', justifyContent: "center" }

  //{...getFieldProps("firstName")}

  
    //     fetch('https://api.covid19api.com/summary')
    //     .then((apidata)=>{
    //         return apidata.json();
    //     })
    // .then((actualdata)=>{
    //     console.log(actualdata.Countries[101].country);
    // })
    // .catch((error)=>{ phoneNumber
    //     console.log(error);
    // });



    // // -----------------------------------------------------------------------------
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const dataToSubmit = {
    //         firstName,
    //         lastName,
    //         phoneNumber,
    //         dob,
    //         emailId,
    //         addressLine1,
    //         addressLine2,
    //         city,
    //         country,
    //         password,
    //         confirmpassword,
    //     }
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //         body: JSON.stringify(dataToSubmit)
    //     }).then(res => res.json())
    //         .then(res => {
    //             alert('submit')
    //             // console.log(res)
    //         })
    // }

