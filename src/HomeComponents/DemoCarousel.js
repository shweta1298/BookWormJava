import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './DemoCarousel.css';

export default function DemoCarousel() {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Livraria-Cultura-Because-you-watched-Stranger-Things.jpg?resize=768%2C517&ssl=1"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/b8086eae-1c38-40af-bdee-5e1f3752fdb0/Best%20non-fiction%20-%20Header%20-%20NONFIC.jpg"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1900&quality=45&fit=max&dpr=2&s=de7b215c5c9a6f4f503f452d8755bf5f"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
//npm install react-scripts
//npm install react-bootstrap -s
//npm i web-vitals --save-dev