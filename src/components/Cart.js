import { useDispatch, useSelector } from 'react-redux';
import { remove, clearCart } from '../store/sliceCart';

const Cart = () => {

  const {cartItems, amount} = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id)=>{
      dispatch(remove(id));
  }

  return (
    <div className='products cart'>
        <div className='heading'>
            <h1 >Cart Items</h1>
        </div>
        <h3 className='empty'>{amount === 0 ? "Cart is empty" : null}</h3>
        <div className='list'>
            {
                cartItems.map((item)=>{
                    const {id, image, title, category, price} = item;
                    return <div key={id} className='listItem'>
                        <h1>{category}</h1>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <p className='price'>Price : <mark>$ {price}</mark></p>
                        <button onClick={()=>removeFromCart(id)}>Remove from Cart</button>
                    </div>
                })
            }
            {amount !==0 && (
            <button className='clear' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
            )}
        </div>
    </div>
  )
}

export default Cart