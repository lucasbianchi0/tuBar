import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './pages/contacto/Contacto';
import Home from './pages/contacto/Home/Home';
import Cart from './pages/contacto/Cart/Cart';
import {CartProvider} from './Contexts/Context'

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <NavBar/>
              <Routes>
                  
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/items/:id' element ={<ItemDetailContainer/>}/>
                  <Route path="/" element={<ItemListContainer/>}/>
                  <Route path='/Cart/' element={<Cart/>}/>
              </Routes>
              
          
              
            </header>
          </div>
        </Router>
      </CartProvider>
    </>
  )
  
}

export default App;
