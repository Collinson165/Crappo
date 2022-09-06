import './App.css';
import Footer from './components/Footer';
import Hash from './components/Hash';
import Header from './components/Header';
import Legend from './components/Legend';
import Main from './components/Main';
import Section from './components/Section';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <Header />

      <div>
        <Main />
        <div className='relative h-36'>
          <div className='absolute z-10 top-1/4 inset-x-1/4' data-aos="zoom-in"  data-aos-duration="2500" >
          <Hash />
          </div>
        </div>
        
        <Section />
      </div>
      
      

      
      <Legend />
      <Footer />
    </div>
  );
}

export default App;
