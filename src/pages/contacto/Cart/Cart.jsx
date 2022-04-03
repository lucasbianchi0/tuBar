import React,{useState, useContext} from 'react'
import { useCartContext } from '../../../Contexts/Context'
import './Cart.css'


const Cart = ({children}) => {
    
    
    const {carrito, contadorItem,cart, totalCart, vaciarCart, eliminarItem } = useCartContext()

  return (
    <>
        <div className='cart-container'>

        {carrito.length === 0 ? 
            (<p>carrito vacio</p>)
        :
            (
                carrito.map((item) => (
                    <div className="cartItem" key={item.id}>
                        <div className="cartItemInfo">
                            <img src={item.imagen }alt={item.title} className='Image' />
                            <div className='cartItem-info'>
                                <h4 className="cartItemTitle">{item.nombre}</h4>
                                <p className="cartItemDescrip" > {item.descripcion}</p>
                                <p className="cartItemQuantity">Cantidad: {item.contadorItem}</p>
                                <p className="cartItemPrice">Precio: ${item.contadorItem * item.precio}</p>
                                <button onClick={()=>eliminarItem(item.id)}>Eliminar </button>
                            </div>
                        </div>
                    </div>
                    
                ))
            )
            
            
            }

            {/* estaba analizando aca  */}

        
         {
             carrito.length === 0 ?
             (<><p></p></>)
             :
             (<>
                 <p>{ `total: ${carrito.reduce((acc, prod) => acc + (prod.precio +prod.contadorItem, 0))}`}</p>
                 <button onClick={vaciarCart}>vaciar carro</button> 
             
             </>)

         }
              
          
        </div>
    </>
  )
}

export default Cart