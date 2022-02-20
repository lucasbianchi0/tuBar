import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import padre from '../../assets/img/padre.png'
import uptown from '../../assets/img/uptown.png'
import cowi from '../../assets/img/cowi.png'



const ItemListContainer = () => {

  const [catalogo, setCatalogo]= useState([]);

    const localidades = [
      {
        id:"1",
        nombre:"Padre Restobar",
        imagen: `${padre}`,
        descripcion: "Buscamos aprovechar la banda negativa de nuestro bar cafeteria ya que no abrimos los lunes, martes y miercoles de tod el mes</p>",
        precio:"$6000 el dia"
      },
      {
        id:"2",
        nombre:"UpTown Bar",
        imagen: `${uptown}`,
        descripcion: "Tenemos el local libre los martes, unicamente alquilamos para eventos privados con fines gastronomicos o como pop up de emprendedores ya asentados",
        precio:"8000 el dia"
      },
      {
        id:"3",
        nombre:"Cowi Wine",
        imagen: `${cowi}`,
        descripcion: "Queremos aprovechar los horarios que no estamos abierto en la semana, de entre las 8 am hasta las 16 hs todos los dias",
        precio:"5000 el dia"
      }, 
    ]


      
      useEffect(() => {
        const promesa = new Promise ((resolve, reject)=>{
          setTimeout(() => {
            resolve(localidades)
          }, 2000);
        })
        
        promesa.then(resultado=>{
          // console.log(resultado)
          setCatalogo(resultado)
        })
    },[localidades])

    // const aviso = "todavia no hay nada por aqui"

  return (
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
  )
}

export default ItemListContainer