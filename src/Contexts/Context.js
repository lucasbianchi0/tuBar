import React, {createContext,useContext,useState,useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { localidadesBaseDeDatos } from '../components/Datos/Productos'

export const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)
    const [catalogo, setCatalogo]= useState([])

    // probandocoder
    const [show, setShow]= useState(false)
    const [producto, setProducto]= useState([])

    // estado del carrito
    const [carrito, setCarrito] = useState([])

    // contador del la pagina de detalle
    const [contadorItem, setContadorItem]= useState(0)

    //  Reduce del total
   const cantidadCart = () => {
    return carrito.reduce((acc, prod) => acc + prod.contadorItem, 0)
  }


  const isInCart = (id) => {
   
   const carritoFiltrado =  carrito.some((prod) => prod.id === id)
    console.log(carritoFiltrado)

}

    // funciones para itemCount
    const sumar =()=>{
      setContadorItem(contadorItem + 1)
  } 

  const restar =()=>{
      if(contadorItem > 0)
      setContadorItem(contadorItem - 1)
      else console.log(`no se puede restar`)
  } 
  console.log(contadorItem)
    
    // const [cantidad, setCantidad]= useState(0)

    // useEffect(()=>{
    //   setCatalogo(localidadesBaseDeDatos)
    // })

    // agregar al carro

    const addToCarto =(item, contadorItem)=>{
      setShow(true)
      if(carrito.some((product)=>product.id===item.id)){
      const copy = [...carrito]
      const repeatItemIndex = carrito.findIndex((product)=> product.id === item.id)

      copy[repeatItemIndex]={
        ...copy[repeatItemIndex],
        contadorItem: copy[repeatItemIndex].contadorItem + contadorItem}
        setCarrito(copy)
        setContadorItem(0)
        
      
      }else{
        setCarrito([...carrito,{...item, contadorItem}])
        setContadorItem(0)
      }
    }
    

    // CART

    const totalCart = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  }

  const vaciarCart = () => {
      setCarrito([])
  }

  const eliminarItem = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id))
  }
    

  

    
    

  return (
   <CartContext.Provider value={{

        cartItems,
        cartItems,
        heart,
        catalogo,
        setCatalogo,
        contadorItem,
        setContadorItem,
        sumar,
        restar,
        cantidadCart,
        isInCart, 
        carrito,
        addToCarto,
        show,
        setShow,
        producto,
        setProducto,
        eliminarItem,
        vaciarCart,
        totalCart
        
    
    }}>{children} </CartContext.Provider>
  )
}

