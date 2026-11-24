import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Ourservices from './Components/Ourservices';
import Team from './Components/Team';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Aboutus' element={<Aboutus/>}></Route>
      <Route path='/Ourservices' element={<Ourservices/>}></Route>
      <Route path='/Team' element={<Team/>}></Route>
      <Route path='/Contactus' element={<Contactus/>}></Route>
      </Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
