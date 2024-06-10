import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
 

export function Navbar(){

    const {openCart, cartQuantity} = useShoppingCart();

    return <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
       <Container>
        <Nav className='me-auto'>
            <Nav.Link to="/" as={NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
                Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
                About
            </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <Button onClick={openCart} style={{width: "3rem", height: "3rem", position: "relative"}}
        variant="outline-primary">
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-cart"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.49-.402L1.61 2H.5a.5.5 0 0 1-.5-.5zm3.14 10h9.721l1.2-5.6H4.64l-.5 2.6zm0 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v.5h-10v-.5zm0-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v.5h-10v-.5zm1-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.5h-8v-.5zm2-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5h-6v-.5zm2-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.5h-4v-.5z"/>
    <circle cx="6.5" cy="14.5" r="1.5"/>
    <circle cx="11.5" cy="14.5" r="1.5"/>
  </svg>
  
  <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
  style={{color: "white", width:"1.5rem", height: "1.5rem", position: "absolute", bottom: 0, 
  right: 0, transform: "translate(25%, 25%)" }}>{cartQuantity}
  </div> 
        </Button>
        )}
        </Container> 
        </NavbarBs>
}