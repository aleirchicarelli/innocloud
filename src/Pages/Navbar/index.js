import Logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.css'

const Menu = () => {
  return (
    <Navbar className='nav' expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <img className='logoImg' src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="menu" >
            <Nav.Link className='navItem text-white square border-end fs-3' href="#home">Home</Nav.Link>
            <Nav.Link className='navItem text-white square border-end fs-3' href="#about">Sobre</Nav.Link>
            <Nav.Link className='navItem text-white square border-end fs-3' href="#service">Serviços</Nav.Link>
            <Nav.Link className='navItem text-white fs-3' href="#contact">Contato</Nav.Link>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;