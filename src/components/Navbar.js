import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {amount} = useSelector(state => state.cart);


  return (
    <div className='navbar'>
        <div className='left'>
            <NavLink to="/"> redux toolkit</NavLink>
        </div>
        <div className='right'>
            <NavLink to="/cart">
                <span>cart</span>
                <AiOutlineShoppingCart/>
                <span className='count'>{amount}</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar