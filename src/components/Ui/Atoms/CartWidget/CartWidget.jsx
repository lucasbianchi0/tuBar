import React,{useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Item from '../../../Item/Item';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Contexts/Context';
import './Cartw.css'


const CartWidget = () => {

  const {cantidadCart} = useContext(CartContext)
  return (
    <div className='flex' >
      <Link to={`/Cart/`}>
        <ShoppingCartIcon className='elcart'/>
      
      </Link>
      <div className='circulo'>
        <p id='fonti'>{cantidadCart()}</p>
      </div>
        
    </div>
  )
}

export default CartWidget