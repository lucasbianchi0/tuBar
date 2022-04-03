import React,{useState, useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/Context'


const ItemCount = ({datosItem, counter, setCounter}) => {

    const { imagen, nombre, precio, id, descripcion} = datosItem
    

    const { contadorItem, setContadorItem,cartItems,setCartItems } = useCartContext()
  
    const btnc = document.querySelector(`.boton-terminarCompra`)
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)
    

    const sumar =()=>{
        setContadorItem(contadorItem + 1)
    } 

    const restar =()=>{
        if(contadorItem > 0)
        setContadorItem(contadorItem - 1)
        else console.log(`no se puede restar`)
    } 
    console.log(contadorItem)

   
  
  return (<>
    <div className='estructura-botones-item'>
        <button onClick={sumar} className='btn-agregar'>+</button>
        <button onClick={restar} className='btn-agregar'>-</button>

        <div className='estructura-contador-item'> 
    
            <p>{contadorItem}</p>
            <p>{heart}</p>
            
        </div>
    </div>
    <div >
   
            
    </div>
   
</>

  )}

export default ItemCount

  