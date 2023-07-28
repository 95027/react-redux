import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(err=>console.log(err));

    },[]);

   // console.log(products);

    if(loading){
        return <Loading/>
    }

    const addToCart = (item)=>{
        // dispatch add action
        dispatch(add(item));

    }

  return (
    <div className='products'>
        <div className='heading'>
            <h1 >Products List</h1>
        </div>
        <div className='list'>
            {
                products.map((item)=>{
                    const {id, image, title, category, description, price} = item;
                    return <div key={id} className='listItem'>
                        <h1>{category}</h1>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <p className='desc'>{description.slice(0,150)}...</p>
                        <p className='price'>Price : <mark>$ {price}</mark></p>
                        <button onClick={()=>addToCart(item)}>Add to Cart</button>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default Products