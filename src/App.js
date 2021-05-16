import {useEffect} from 'react'
import Aos from 'aos'

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';

import 'aos/dist/aos.css'
import './App.css';

function App() {

  useEffect(() =>{
    Aos.init({
      duration: 2000
    });
  }, [])

  return (
    <div className="relative module h-screen">
      <Nav />
      <div className="flex justify-center mt-3 mb-10">
        <div className="bg-white h-0.5 w-2/4"/>
      </div>
      <div className="h-32"></div>
      <Header />
    </div>
  );
}

export default App;
