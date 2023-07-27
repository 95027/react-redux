import {AiOutlineShoppingCart} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <NavLink to="/"> redux toolkit</NavLink>
        </div>
        <div className='right'>
            <NavLink to="/cart">
                <span>cart</span>
                <AiOutlineShoppingCart/>
                <span className='count'>0</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar