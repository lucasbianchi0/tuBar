import React, { useEffect,useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import { localidadesBaseDeDatos } from '../Datos/Productos'
import { useCartContext } from '../../Contexts/Context'
import { useAppContext } from '../../Contexts/AppContext'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList.jsx/ItemList'


const ItemListContainer = () => {

  // nuevo  
  const {products }= useAppContext()
  console.log(products)
  const [productsCategory,setProductsCategory]= useState([])

  const {categoryId} = useParams()
  

  useEffect(()=>{
    !categoryId
      ? setProductsCategory(products)
      : setProductsCategory(
              products.filter((product)=>product.categoria === categoryId))
  },[categoryId,products])

  console.log(productsCategory)
  console.log(categoryId)

  const {catalogo, setCatalogo} = useCartContext()

    
  return (


    <div className='structure-itemlist'>
      <div className='container-itemlist'>


        {/* <ItemList products={productsCategory} ></ItemList> */}

      
        {/* {
        // catalogo.length === 0 ?
        // <>
        // <p>Cargando...</p>
        // </>
        // : */}

        {
        productsCategory.map((infoLocal)=>{
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