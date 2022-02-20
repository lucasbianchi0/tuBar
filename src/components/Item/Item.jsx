import React , {useState} from 'react';
import padre from '../../assets/img/padre.png'
import './Item.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Item = ({data}) => {

    const [contar, setContar] = useState(0);
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)

   
    const reservar = ()=>{ 
        setContar(contar + 1)
        setHeart(<FavoriteIcon className='heart-edit'/>)
        console.log(contar)
        
    }
  


  return (
    <div className='item-style'>
        <figure>
            <img className='imagen-item' src= {data.imagen} alt="" />
        </figure>
        <div>
            <h2>{data.nombre}</h2>
            <p>{data.descripcion}</p>
            <p className='precio'>{data.precio}</p>
            <div className='estructura-botones-item'>
                <button data-id={data.id} onClick={reservar} className='btn-agregar'>Reservar</button>
                <div className='estructura-contador-item'> 
                    <p>{contar}</p>
                    <p>{heart}</p>
                    
                </div>
            </div>
           

        </div>
        
    </div>
  )
}

export default Item