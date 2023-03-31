import React from 'react';
import Card from '../UI/Card';
import classes from './UserCandyItems.module.css';
import CandyItem from './CandyItem';

const UserCandyItems=(props)=>{
    return(
        <Card className={classes.users}>
            <ul>
            {props.candies.map((candy)=>(
                <CandyItem
                id={candy.id}
                name={candy.name}
                description={candy.description}
                price={candy.price}
                key={candy.id}
               />
            ))}
            </ul>
        </Card>
    )
}
export default UserCandyItems;