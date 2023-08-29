import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css"

function Navigation() {
  return (
    <Navbar className="main_navi">
      <Container fluid>
        <Navbar.Brand href="#" className="navi_logo">
          <div className="logo_imge">
          <img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-beauty-care-logo-png-image_5773807.png" 
          style={{width:"164px",height:"120px",mixBlendMode:"multiply"}}/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav_scroll"
          >
            <Nav.Link href="#action1" class="nav-link active" style={{color:"rgb(169, 154, 130)"}}>Home</Nav.Link>
            <Nav.Link href="#action2" class="nav-link active" style={{color:"rgb(169, 154, 130)"}}>Dropdown</Nav.Link>
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item  href="#action3">404</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Some Where else
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1" class="nav-link active" style={{color:"rgb(169, 154, 130)"}}>Brands</Nav.Link>
            <Nav.Link href="#action1" class="nav-link active" style={{color:"rgb(169, 154, 130)"}}>Beauty Advice</Nav.Link>
          </Nav>
          <Form className="bttn_2">
            <div className='input_' style={{border:"none"}}>
            <input type="text" placeholder='Search On ' style={{textAlign:"center",color:"white",fontWeight:"450"}}/>
            </div>
            <div className='btn'>
            <i class="fa-solid fa-cart-arrow-down fa-beat fa-2xl" style={{color:"rgb(242, 159, 36)"}}></i>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;