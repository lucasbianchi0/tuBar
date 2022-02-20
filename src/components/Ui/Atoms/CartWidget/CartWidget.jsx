import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Item from '../../../Item/Item';
import Contador from '../../../Contador/Contador';

const CartWidget = () => {
  return (
    <div >
        <ShoppingCartIcon/>
      
        {/* {  <div className="estructura-deproductos contenedor-cardlist">
                {products.map((data)=>{
                    return (
                        <div className="produc " key={data.id}>
                            <Link to={`/detail/${data.id}`}>
                                <Item data={data}/>
                            </Link>
                        </div>
                    ) */}
        <Contador estado ={Item.contar} />
        
        
    </div>
  )
}

export default CartWidget