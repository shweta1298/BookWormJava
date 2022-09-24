import React, { Component } from 'react';
import {
    Row, Col,Container
} from 'reactstrap';

import Cards from './Cards';
//import Cards1 from './Cards1';


class NowTrending extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Books: []
        };

    }
    
    componentDidMount() {
        fetch('http://localhost:8080/BookWormJ/getforhome/1')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        Books: result
                    });
                }
            );
    }
    render() {
        return(
            <React.Fragment>


                {this.state.Books.map(bookdata=>
                   <Col sm='3'> 
                  <Cards key={bookdata.id} object={bookdata}/>
                  </Col> 
                  )}
           
           </React.Fragment>

        )
    }
    
}
export default NowTrending;
//npm install bootstrap
//npm install -S react-router-dom