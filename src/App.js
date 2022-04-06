import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './pages/contacto/Contacto';
import Home from './pages/contacto/Home/Home';
import Cart from './pages/contacto/Cart/Cart';
import {CartProvider} from './Contexts/Context'
import AppContextProvider from './Contexts/AppContext';

function App() {
  return (
    <>
      <AppContextProvider>
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
                    <Route path="/category/:categoria" element={<ItemListContainer/>}/>
                    <Route path='/Cart/' element={<Cart/>}/>
                </Routes>
                
            
                
              </header>
            </div>
          </Router>
        </CartProvider>
      </AppContextProvider>
    </>
  )
  
}

export default App;
