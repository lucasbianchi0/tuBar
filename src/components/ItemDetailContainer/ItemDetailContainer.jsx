import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { localidadesBaseDeDatos } from '../Datos/Productos'

const ItemDetailContainer = () => {
    
    const [producto, setProducto]= useState([])
    const {id}=useParams()
    
    const obtenerProductDB = (nombreProducto) => {
      return  new Promise((resolve, reject)=>{
        const arregloProductosDB = localidadesBaseDeDatos;
        const productoEncontrado =arregloProductosDB.find((elemento)=> elemento.id === 
        nombreProducto);
        setTimeout(() => {
            resolve(productoEncontrado)
            }, 2000);
        })
    }
        
    useEffect(() => {
        const obtenerProducto = async (id)=>{
            const responsePromise = await obtenerProductDB(id)
           setProducto(responsePromise)
        }
        obtenerProducto(id)
        }, [id])
        // console.log(producto)
        return(
           <div>
               <ItemDetail info ={producto}/>
           </div>
        )
    }
    
           
    

export default ItemDetailContainer
