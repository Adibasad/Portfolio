import {Container,Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import home_img from "../img/home_img.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Banner=()=>{
    return(
        <section className="banner" id="home">
            <Container >
                <Row className="align-items-centre" >
                   <Col xs={12} md={4} xl={5}>
                    <img src={home_img} alt="home_img" className='home_img'></img>
                    </Col>

                    <Col xs={12} md={6} className='text'>
                       <div className='tagline'>
                       <h5>{'Welcome to my Portfolio'}</h5>
                       <h3>I'm <span>Adiba Sadaf</span></h3> 
                       <h1>{'Software Engineer'}</h1>
                       <p> Aspiring Software Engineer with a Passion for Problem-Solving, Technology and Creativity.</p>
                       <Button variant="outline-info"  bsClass="custom-btn">About Me</Button>{' '}
                       <Button variant="outline-info">Let's Connect</Button>{''}
                       </div>
                    </Col>    
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
