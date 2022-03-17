import React,{useState, useContext} from 'react'
import { useCartContext } from '../../../Contexts/Context'

const Cart = ({children}) => {
    
    
    const {cartAmount, ItemAgregado } = useCartContext()
    console.log(ItemAgregado )
    console.log(cartAmount )


  return (
    <>
    {/* {ItemAgregado.length === 0 ? 
        (<p>carrito vacio</p>)
    :
        (ItemAgregado.map((i)=>{
            return (
                <>
                    <p>{i}</p>
                </>
            )
        })
    )
    } */}
    </>
  )
}

export default Cart