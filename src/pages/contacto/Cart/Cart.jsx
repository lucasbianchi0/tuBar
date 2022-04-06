import React,{useState, useContext} from 'react'
import Swal from 'sweetalert2'
import { generateOrder } from '../../../components/firebase/firebase'
import { useCartContext } from '../../../Contexts/Context'
import './Cart.css'


const initialBuyer ={
    name: "",
    phone: "",
    email:"",
}

const Cart = ({children}) => {
    
    
    const {carrito, contadorItem,cart, totalCart, vaciarCart, eliminarItem } = useCartContext()

    const[buyer,setBuyer]= useState(initialBuyer)

    carrito.forEach((item)=>{
        console.log(item)
    })

    let total = 0

    for (let i= 0; i< carrito.length; i++){
        const price = carrito[i].precio  * carrito[i].contadorItem
        total += price
    }

    const order ={
        buyer,
        item: carrito,
        total
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        if(buyer.name !== "" && buyer.phone !== "" &&  buyer.email !== "" ){
            // generacion de orden 
            generateOrder(order).then((res)=>{
                new Swal({
                    title: "Tu orden fue enviada con exito!",
                    text:`tu numero de orden es: ${res.id} `,
                    icon:" success",
                    button: "ok",
                })
            })
            .then(()=>vaciarCart())
            .catch(
                (err)=> new Swal(`hubo un error!`, "intentalo nuevamente","error")
            )
        }else{
            new Swal({
                title: "hubo un error en tus datos",
                text:"revisa el formulario de tus datos y vuelve a enviar el pedido ",
                icon:" error",
                button: "ok",
            })
        }
    }

    const handlerChange = (e)=>{
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value,
        })
    }

   



  return (
    <>
        <div className='contendur'>
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
            )   }

            </div>
            <div >

                {carrito.length !== 0 && (
                    <>
                    <div className=' cart-container cart-container-resumen'>
                        <div className='divv'>
                            <h2>Resumen carrito</h2>  

                            <p>Total a pagar ${total} </p>
                        </div>
                            
                        <div className='divv'>

                            <form action=""
                                onSubmit={handlerSubmit}
                                onChange={handlerChange}>

                                    <input type="text"
                                        placeholder='Nombre'
                                        value={order.name}
                                        type="text"
                                        name="name"
                                    />

                                    <input type="text"
                                        placeholder='Telefono'
                                        value={order.phone}
                                        type="number" 
                                        name="phone"
                                    />

                                    <input type="text"
                                        placeholder='Email'
                                        value={order.email}
                                        type="text" 
                                        name="email"
                                    />

                                    <button onClick={handlerSubmit}>
                                        enviar orden
                                    </button>
                                </form>
                            </div>
                            </div>
                    </>
                   
                )}
            </div>
            </div>
     </>

  )
}

export default Cart

   

