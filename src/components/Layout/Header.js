import React,{Fragment, useState} from 'react';
import classes from './Header.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import HeaderCartButton from './HeaderCartButton';
 const Header=(props)=>{
    const [enteredCandyname,setEnteredCandyname] = useState('');
    const [enteredDescription,setEnteredDescription] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');

    const onAddCandyHandler=(event)=>{
        event.preventDefault();
        props.onAddCandy(enteredCandyname,enteredDescription,enteredPrice);
        setEnteredCandyname('');
        setEnteredDescription('');
        setEnteredPrice('');
    }
    const candyNameChange=(event)=>{
        setEnteredCandyname(event.target.value);
    }
    const descriptionChange=(event)=>{
        setEnteredDescription(event.target.value);
    }
    const priceChange=(event)=>{
        setEnteredPrice(event.target.value);
    }

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Candy Items</h1>
                <HeaderCartButton onclick={props.onShowCart}></HeaderCartButton>
            </header>
            <Card className={classes.input}>
                <form onSubmit={onAddCandyHandler}>
                    <label htmlFor='candyname'>CandyName:</label> 
                    <input id='candyname' type="text" value={enteredCandyname} onChange={candyNameChange}/>
                    <label htmlFor='description'>Description:</label>
                    <input id='description' type="text" value={enteredDescription} onChange={descriptionChange}/>
                    <label htmlFor="price">Price:</label>
                    <input id="price" type="number" value={enteredPrice} onChange={priceChange}/>
                    <Button type="submit">Add</Button>
                </form>
            </Card>

        </Fragment>
    )
 }
 export default Header;