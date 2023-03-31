import './App.css';
import React,{useState} from 'react';
import Header from './components/Layout/Header';
import UserCandyItems from './components/Candies/UserCandyItems';
import CartProvider from './store/CardProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [candieslist, setCandiesList] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const addCandyHandler =(candyname,candydescription, candyprice)=>{
    setCandiesList((prevCandiesList)=>{
      return [...prevCandiesList, 
        {name:candyname, description:candydescription, id:Math.random().toString(), price:candyprice}];
    });
  }

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const onHideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onHideCartHandler}/>}
      <Header onAddCandy={addCandyHandler} onShowCart={showCartHandler}/>
      <main>
      <UserCandyItems candies={candieslist}/>
      </main>
    </CartProvider>
  );
}

export default App;
