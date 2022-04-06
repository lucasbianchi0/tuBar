import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { localidadesBaseDeDatos } from '../Datos/Productos'
import { useCartContext } from '../../Contexts/Context'
import { useAppContext } from '../../Contexts/AppContext'
import { getItem } from '../firebase/firebase'


const ItemDetailContainer = () => {

      // nuevo
    const {products}= useAppContext()
    // const {producto, setProducto} = useAppContext()

    const [productClicked, setProductClicked]= useState({})

    const {id}=useParams()

    useEffect(()=> {
        getItem(id).then((item)=>
            setProductClicked({...item.data(), id:item.id})
        )
      },[id, products])
    
    
    
    // const [producto, setProducto]= useState([])
   
    
    // const obtenerProductDB = (nombreProducto) => {
    //   return  new Promise((resolve, reject)=>{
    //     const arregloProductosDB = localidadesBaseDeDatos;
    //     const productoEncontrado =arregloProductosDB.find((elemento)=> elemento.id === 
    //     nombreProducto);
    //     setTimeout(() => {
    //         resolve(productoEncontrado)
    //         }, 2000);
    //     })
    // }
        
    // useEffect(() => {
    //     const obtenerProducto = async (id)=>{
    //         const responsePromise = await obtenerProductDB(id)
    //        setProducto(responsePromise)
    //     }
    //     obtenerProducto(id)
    //     }, [id])
      
        return(
           <div>
               <ItemDetail info ={productClicked}/>
               
           </div>
        )
    }
    
           
    

export default ItemDetailContainer
