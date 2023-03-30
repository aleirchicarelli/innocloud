import { Container } from 'react-bootstrap';
import About from './Pages/About';
import Contatos from './Pages/Contatos';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Pages/Services';


function App() {
  return (
    <Container fluid style={{ backgroundColor: 'rgba(2, 70, 108, 0.9)', marginTop: -100, position: 'relative' }}>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contatos />
      <Footer />
    </Container>

  );
}
export default App;
