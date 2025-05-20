import React from 'react'
import './index.css';

type ProductCardProps = {
 id: number;
 title: string;
 price: number;
 rating: number;
 discountPercentage?: number;
 image: string;
 addToCart: (val: number)=> void;
 updateCount: (id: number,val: boolean) => void;
 count: number;
};

function ProductCard({id, title, price, rating, image,addToCart , count,updateCount }: ProductCardProps) {
  return (
    <div className='product-card'>
        <div>Name: {title} </div><div> Rating:  {rating}</div>
        <img src={image} className='product-image' />
        <div>Price: {price}</div> 

        {!count?
        <button
         onClick={()=> addToCart(id)}
         >Add to Cart</button>: 
         <div>  <button onClick={()=>updateCount(id, false)} >-</button> {count}  <button onClick={()=>updateCount(id, true)}>+</button></div>
        }
        



    </div>
  )
}

export default ProductCard