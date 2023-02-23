import About from './Pages/About';
import Contatos from './Pages/Contatos';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Pages/Services';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='background'>
        <Home />
        <About />
      </div>
      <Services />
      <Contatos />
      <Footer />
    </div>

  );
}
export default App;
