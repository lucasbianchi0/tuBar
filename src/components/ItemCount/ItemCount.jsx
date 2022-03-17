import React,{useState, useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../ItemDetail/ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/Context'


const ItemCount = ({datosItem}) => {

    const {cartCount, setCartCount, addItem,setCartAmount ,cartAmount, itemAgregado,setItemAgregado} = useCartContext()
    console.log(`djcjc`+ cartCount)

    const btnc = document.querySelector(`.boton-terminarCompra`)
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)
  
    const [itemagre, setitemagre] = useState(0)
    
    const reservar = (e)=>{ 
        e.preventDefault()
        setCartCount(cartCount + 1)
        setHeart(<FavoriteIcon className='heart-edit'/>)
    }
    console.log(cartCount)

    const reducir = (e)=>{
        e.preventDefault()
        console.log(cartCount)
        if(cartCount > 0 ){
            setCartCount(cartCount - 1)
            setHeart(<FavoriteBorderIcon />)
            console.log(cartCount)
            
        }else{
            btnc.classList.add(`boton-terminarCompra`) 
            console.log(`sape`)
        }

    }

    const agregar = (e)=>{
        e.preventDefault()
        console.log(e.target.parentElement.parentElement)
        const cardProd = e.target.parentElement.parentElement

        
        const itemAg ={
            name: cardProd.querySelector(`#name-product`).textContent,
            descript: cardProd.querySelector(`#descript-product`).textContent,
            price: cardProd.querySelector(`.precio-item-detail`).textContent,
        }

        setItemAgregado([itemAg])

        setCartAmount(cartCount )
    
        console.log(cartCount)
        console.log(itemAg)
        const itemsCarrito = cartCount

        console.log(`hol `+ itemsCarrito)

        console.log(datosItem)
       
        funcionAgregar(itemAgregado)
    }
    console.log(itemAgregado)


    const funcionAgregar = (carri)=>{
        console.log(itemAgregado)
        console.log(carri)
        if (carri === undefined){
            console.log(`nada`)
        }else if(cartCount > 0 ){
            
            btnc.classList.add(`btn-display`) 
        }else{
            console.log(`nd`)
        }
    }

    const terminarCompra = (e)=>{
        e.preventDefault()
        console.log(`siii`)
    }

    useEffect(() => {

      
    })
    
   
  
  return (<>
    <div className='estructura-botones-item'>
        <button onClick={reservar} className='btn-agregar'>+</button>
        <button onClick={reducir} className='btn-agregar'>-</button>

        <div className='estructura-contador-item'> 
    
            <p>{cartCount}</p>
            <p>{heart}</p>
            
        </div>
    </div>
    <div >
        {
            cartCount === 0?
            <>
                <p></p>
            </>
            :
            <>
            {/* <button  onClick={()=>addItem(itemAgregado,contar)}>Agregar al carrito</button> */}
            <button  onClick={agregar}>Agregar al carrito</button>
            
        </>
        }
        <p></p>
    </div>
    <div id='fio'>  
         <Link to={`/Cart/`}>
            <button className='boton-terminarCompra' >Terminar compra</button>
        </Link>
       
    </div>
</>


  )}

export default ItemCount