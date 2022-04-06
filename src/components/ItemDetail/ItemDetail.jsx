import React, {useState} from 'react'
import { localidadesBaseDeDatos } from '../Datos/Productos'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../Contexts/Context'
import { Link } from 'react-router-dom'


const ItemDetail = ({info}) => {
    const {contadorItem, addToCarto,numeroCarro, setNumeroCarro,isInCart,show,setShow,producto, setProducto } = useCartContext()
    const { imagen, nombre, precio, id, descripcion} = info;
    const productoSeleccionado = info;


  return (
    <div className='structure-containerdetail'>
        <div className='itemDetail-structure'>
            <figure>
        <img className='imagen-itemdetail' src={imagen} alt="" />
                
            </figure>
            <div className='item-detail-text'>
                <h1 id='name-product'>{nombre}</h1>
                <p id='descript-product'>{descripcion}</p>
                <p className='precio-item-detail'>$ {precio} el dia</p>
               
                  <ItemCount 
                  datosItem ={productoSeleccionado}
                  />
                  <button onClick={()=>addToCarto(info,contadorItem)} >Agregar plan b</button>


               {
                show? 
                <>
                <div id='fio'>  
                  <Link to={`/Cart/`}>
                    <button  >Terminar compra</button>
                  </Link>
                </div>
              </>: 
              <> <div><p></p></div></>

               }
            </div>

       
    </div>
    </div>
  
  )} 
export default ItemDetail


// {
//   isInCart(id)
//   ? 
//   <>
//     <div id='fio'>  
//       <Link to={`/Cart/`}>
//         <button  >Terminar compra</button>
//       </Link>
//     </div>
//   </>
//   :
//   <>
//     <ItemCount 
//     datosItem ={productoSeleccionado}
//     />
//     <button onClick={agregar} >Agregar al carrito</button>
//   </>
//  }