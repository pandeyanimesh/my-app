import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Cart, Product } from '../utils/types';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../utils/helper';

const CART_DATA = "cartdata";



function ProductPage() {


  const [ data, setData] = useState<Product[]>([]);
  const [cartData, setCartData] = useState<Product[]>();


  const fetchCartData = () => {
    getItemFromLocalStorage("cartdata");
  }
  
  const fetchData = () => {
    fetch("https://dummyjson.com/products").then((response)=>{
      return response.json();
    }).then((res)=>{
      console.log({res});
      setData(res.products);

    });
  };

  const updateProductCount = (id:number, inc: boolean, count?: number) => {
    let newProducts: Product[] = [...data];

    newProducts = newProducts.map((product)=>{
      if(product.id === id){
         return {...product, count: count? count: inc?product.count+1: product.count-1};
      }
      return product;
    })

    setData(newProducts);

  }

  const updateCart = (id:number, inc: boolean) => {
    let newCart: Cart[] = getItemFromLocalStorage(CART_DATA)?.products || [];
    let count;
    newCart = newCart.map((product)=>{
      if(product.id === id){
         count = product.count;
         return {...product, count: inc?product.count+1: (product.count-1)};
      }
      return product;
    })
    if(count ===1){
      newCart = newCart.filter((product)=>{
        return product.id !== id ;
       
      })
    }

    setItemInLocalStorage(CART_DATA, {products: newCart});
 

  }


  const updateCount = (id: number,inc: boolean)=> {
    updateCart(id, inc);
    updateProductCount(id, inc);
  }

  const addToCart = (id: number)=> {
      const cartItems: Cart[] = getItemFromLocalStorage(CART_DATA)?.products || [];
      let count = 1;
      
      const item = cartItems.length?cartItems?.filter((product)=>{   
        return product.id === id;
       }): [];
      let newCart: Cart[] = cartItems?.filter((product)=>{   
        return product.id !== id;
       }) || [];
      if(item.length>0){
         count = item[0].count + 1;
          newCart = [...newCart, {id: item[0].id, count  } ];
      }else{
          newCart = [...cartItems, {id, count}];
      } 
      setItemInLocalStorage(CART_DATA, {products: newCart});
      updateProductCount(id,false, count );
  }


  useEffect ( () => {
    fetchData();


  },[]);
  


  return (
    <div>
      {data.map((items)=>{
          return <ProductCard id={items.id} title={items.title} price={items.price} rating={items.rating} image={items.images[0]} addToCart={addToCart} count={items.count ?? 0} updateCount={updateCount}/>
      })}



    </div>
    
  )
}

export default ProductPage