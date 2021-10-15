import './App.css';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Video from './components/Video';
import Products from './components/Products';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid main-container">
        <SubHeader />
        <Video />
        <Products />
        <Services />
        <Clients />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
