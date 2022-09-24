import React, { Component } from 'react';

import {
    Row, Col,Container
} from 'reactstrap';
import DemoCarousel from './DemoCarousel';
import NowTrending from './NowTrending'
import BestSeller from './BestSeller'
import NewArrival from './NewArrival'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    ButtonBase
} from "@mui/material";


export class Home extends Component {
    
    render() {
        // const getuserArr = localStorage.getItem("login");
        //         console.log(getuserArr);
        return (
            <div>
                <DemoCarousel />
                <br></br>
                <Typography  sx={{ fontFamily: 'Monotype Corsiva', color:"#565656" }}>
                <h1><u>Now Trending</u></h1>
                </Typography>
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <NowTrending />
                        </Row>
                    </Container>
                </div>
                <br></br>
                <br></br>
                <Typography sx={{ fontFamily: 'Monotype Corsiva', color:"#565656" }}>
                <h1><u>Best Seller</u></h1>
                </Typography >
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <BestSeller />
                        </Row>
                    </Container>
                </div>
                <br></br>
                <br></br>
                <Typography sx={{ fontFamily: 'Monotype Corsiva', color:"#565656" }}>
                <h1><u>New Arrival</u></h1>
                </Typography>
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <NewArrival />
                        </Row>
                    </Container>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Home
