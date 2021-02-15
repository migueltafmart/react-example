import './App.css';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
      <Head className="Head" mssg="Sección Home"/>
      <Nav class="NavBar"/>
      <Nav class="NavBarBlue"/>
      
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
