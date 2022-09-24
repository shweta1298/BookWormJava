import React, { Component } from 'react'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button, Row, Col
// } from 'reactstrap';
import './Card.css';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    ButtonBase
} from "@mui/material";
import { useNavigate } from 'react-router-dom';



let tempid = -1;
export default function Cards(props) {
    const navigate = useNavigate();

    const redirectToDiscription = () => {

        //localStorage.setItem("Bookdata",bookobject)
        localStorage.setItem("Bookid",tempid)
        navigate('/FetchDiscription');
    }


    return (
        <React.Fragment>
            <ButtonBase>
                <Card 
                onClick={()=>{
                    tempid=props.object.id;
                    redirectToDiscription()}}
                sx={{ width: "250px", height: "450px", marginBottom: "20px", bgcolor: "#fff6ff",borderColor:"#ff3b3f"}}>
                    <CardMedia
                        sx={{ maxHeight: "350px", maxWidth: "230px", paddingLeft: "20px", marginTop: "10px" }}

                        component="img"
                        //height="300px"
                        image={props.object.paths.bookPath + props.object.cover}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='text-truncate' sx={{ fontFamily: 'Raleway', fontSize:"18px" }}>
                            {props.object.title}-{props.object.authors.authorName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color:"#ff3b3f"}}>
                        <h6><b>₹{props.object.basePrice}</b></h6>
                        </Typography>
                    </CardContent>

                </Card>
            </ButtonBase>
        </React.Fragment>
    )
}



