import React, {useState} from 'react'
import { localidadesBaseDeDatos } from '../Datos/Productos'
import './ItemDetail.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ItemDetail = ({info}) => {

    const [contar, setContar] = useState(0);
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)

   
    const reservar = ()=>{ 
        setContar(contar + 1)
        setHeart(<FavoriteIcon className='heart-edit'/>)
        console.log(contar)}
    const { imagen, nombre, precio, id, descripcion} = info;
        
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
                <div className='estructura-botones-item'>
                    <button data-id={id} onClick={reservar} className='btn-agregar'>Reservar</button>
         
                <div className='estructura-contador-item'> 
                    <p>{contar}</p>
                    <p>{heart}</p>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  
  )} 
export default ItemDetail