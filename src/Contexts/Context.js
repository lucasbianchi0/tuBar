import React, {createContext,useContext,useState,useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { localidadesBaseDeDatos } from '../components/Datos/Productos'

export const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartAmount, setCartAmount]=  useState(0)
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)
    const [catalogo, setCatalogo]= useState([])
    const [itemAgregado, setItemAgregado] = useState([])
    const [itemagre, setItemagre]= useState([])

    const addItem =(item, amount)=>{
        setCartItems([...cartItems,{...item, amount}]);
        setCartCount((prev)=> prev + amount)
    }


    useEffect(()=>{
      setCatalogo(localidadesBaseDeDatos)
      console.log(catalogo)
    })


  return (
   <CartContext.Provider value={{
       cartCount, 
       cartItems,
        setCartCount, 
        heart,
        catalogo,
        setCatalogo,
        itemagre,
        setItemagre,
        addItem, 
        setCartAmount,
        cartAmount,
        itemAgregado,
        setItemAgregado
    
    }}>{children} </CartContext.Provider>
  )
}

