
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Dogs from './Dogs/Dogs';
import Cart from './Carts/Cart'
import Navbar from './Navbar/Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [AllDogs, setAllDogs] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs")
      return res
    }
    getData().then((res) => {
      console.log(res.data)
      setAllDogs(res.data)
    }).catch(err => { console.log(err) })

  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs AllDogs={AllDogs} />} />
            <Route path="/checkout" element={<Cart />} />

          </Routes>

        </div>



      </Router>


    </div>
  );
}

export default App;
