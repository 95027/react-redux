import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
