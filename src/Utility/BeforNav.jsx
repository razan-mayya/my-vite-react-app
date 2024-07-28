import logo from '../images/logo.png'
import { Button, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const BeforNav = () => {
    return (

        <Navbar collapseOnSelect expand="lg" >
            <Container >
                <div style={{
                    width: "100%", justifyContent: 'space-between',
                    alignItems: "center"
                }} className='d-flex '>
                    <Navbar.Brand href="#home"><img src={logo} className='logoNav' alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>

                <Navbar.Collapse id="responsive-navbar-nav" style={{ flexDirection: "row-reverse" }}>
                    <Nav >
                        <div className='d-flex gap-2 align-items-center'>
                            <p>Search The</p>
                            <Dropdown >
                                <Dropdown.Toggle style={{ backgroundColor: "white", color: "black", borderColor: "black", borderRadius: "0px" }} id="dropdown-basic">
                                    Catalog
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <p>By</p>
                            <Dropdown >
                                <Dropdown.Toggle style={{ backgroundColor: "white", color: "black", borderColor: "black", borderRadius: "0px" }} id="dropdown-basic">
                                    Keyword
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form className="d-flex" style={{ height: "fit-content", borderRadius: "0px" }}>
                                <Form.Control
                                    style={{ borderColor: "black", color: "red", borderRadius: "0px", minWidth: "285px" }}
                                    type="search"
                                    placeholder="Let’s Find What You’re Looking For"
                                    aria-label="Search"
                                />
                                <Button style={{ backgroundColor: "black", borderRadius: "0px", borderColor: "black" }}><i className="fa-solid fa-magnifying-glass fa-2xs" style={{ color: " #ffffff" }}></i></Button>
                            </Form>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default BeforNav