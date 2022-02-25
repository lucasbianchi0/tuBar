import React, { useEffect,useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import { localidadesBaseDeDatos } from '../Datos/Productos'

const ItemListContainer = () => {
  const [catalogo, setCatalogo]= useState([])

  useEffect(()=>{
    setCatalogo(localidadesBaseDeDatos)
  })
      

  return (
    <div className='structure-itemlist'>
      <div className='container-itemlist'>

      
        {catalogo.length === 0 ?
        <>
        <p>Cargando...</p>
        </>
        :
        catalogo.map((infoLocal)=>{
          return(
              <div className="produc " key={infoLocal.id}>
                  <Item data={infoLocal}/>
              </div>
        )
        })}
      
      </div>
    </div>
  )
}

export default ItemListContainer