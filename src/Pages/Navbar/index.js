import Logo from '../../assets/images/logo.png'
import { LogoImg, Menu, Nav } from './styles.js';


const Navbar = () => {
  return (
    <Menu>
      <LogoImg src={Logo} />
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#service">Serviços</a>
        <a href="#contact">Contato</a>
      </Nav>
    </Menu>
  )
}

export default Navbar;