import React,{useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    const {items} =cartCtx;

    const numberOfCartItems = items.reduce((curNum,item)=>{
        return curNum+item.amount;
    },0);


    return(
        <button className={classes.button} onClick={props.onclick}>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;