//import Recat from 'react';

const Footer =()=>{
    return (
    <footer style={{backgroundColor :"#fff6ff"}}>
        <div className="pt-5">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-6 col-lg-4 pe-5" style={{textAlign : "justify"}}>
                            <h4>ABOUT US</h4>
                            <p>Bookworm is newly founded organization founded by group of literature
                                 & performing art lovers. Bookworm is based on the concept of virtual 
                                 bookshop, which will allow user to buy, store, & read books online. </p>
                        </div>
                        <div className="col-6 col-lg-4 ps-5" style={{textAlign : "left"}}>
                        <h4>CONTCT US</h4>
                        
                            <p>SM VITA, Mumbai</p>
                            <p>emial:smvita123@gmail.com</p>
                            <p>Phone: 1234567890</p>
                        </div>
                        <div className="col-6 col-lg-4 ps-5" style={{textAlign : "left"}}>
                        <h4>FOLLOW US</h4>
                            <ul>
                                <li>instagram</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;