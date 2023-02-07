import './App.css'
function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h1>Innocloud</h1>
              <h3>Consultoria e soluções em T.I</h3>
            </div>
            <div className="item-menu">
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Seviços</a>
              <a href="#">Contato</a>
            </div>
          </div>
        </div>

      </div>
        <div className='form'>
          <forme>
            <h2>Entre em contato</h2>
            <div className='item-form'>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="submit" />
            </div>
          </forme>
        </div>
      <div className='footer'>
        <div className='item-footer'>
        <a href="#">Instagran</a>
        <a href="#">Faceboock</a>
        <a href="#">Whatsapp</a>
        <a href="#">Localizaçaõ</a>
        </div>
        </div>
    </div>

  );
}
export default App;
