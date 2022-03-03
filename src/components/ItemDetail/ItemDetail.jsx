import React, {useState} from 'react'
import { localidadesBaseDeDatos } from '../Datos/Productos'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({info}) => {
    const { imagen, nombre, precio, id, descripcion} = info;
    const productoSeleccionado = info;

  return (
    <div className='structure-containerdetail'>
        <div className='itemDetail-structure'>
            <figure>
        <img className='imagen-itemdetail' src={imagen} alt="" />
                
            </figure>
            <div className='item-detail-text'>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <p className='precio-item-detail'>{precio}</p>
                <ItemCount datosItem ={productoSeleccionado}/>
        
        </div>
    </div>
    </div>
  
  )} 
export default ItemDetail