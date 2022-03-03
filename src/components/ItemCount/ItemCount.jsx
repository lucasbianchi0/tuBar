import React,{useState, useEffect} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../ItemDetail/ItemDetail.css'


const ItemCount = ({datosItem}) => {
    const [contar, setContar] = useState(0);
    const [heart, setHeart] = useState(<FavoriteBorderIcon />)
    const [itemAgregado, setItemAgregado] = useState([])
    console.log(itemAgregado)
    
    const reservar = ()=>{ 
        setContar(contar + 1)
        setHeart(<FavoriteIcon className='heart-edit'/>)
    }
        console.log(contar)

    const agregar = ()=>{
        let itemsCarrito = contar
        console.log(`hol`+ itemsCarrito)
        // console.log(`hol`+ contar)
        console.log(datosItem)
        setItemAgregado(datosItem)
        console.log(itemAgregado)
        terminarCompra(itemAgregado)
    }


    const terminarCompra = (carri)=>{
        console.log(carri)
        if (carri === undefined){
            console.log(`nada`)
        }else{
            return(
                <div>
                    <button>Terminar compra</button>
                </div>
            )
        }

    }
   
  
  return (<>
    <div className='estructura-botones-item'>
        <button onClick={reservar} className='btn-agregar'>+</button>

        <div className='estructura-contador-item'> 
    
            <p>{contar}</p>
            <p>{heart}</p>
            
        </div>
    </div>
    <div>
        {
            contar === 0?
            <>
                <p></p>
            </>
            :
            <>
            <button onClick={agregar}>Agregar al carrito</button>
        </>
        }
        <p></p>
    </div>
</>

  )}

export default ItemCount