import React from 'react';
import style from './orderPage.module.scss'
import Cartitem from "../../cartitem/cartitem";

const OrderPage = ({items, onDeleteItemFromCart}) => {
    return (
        <div>
            <h1>товары из корзины</h1>
            {items.map(item => <Cartitem onDeleteItemFromCart={onDeleteItemFromCart} item={item} key={item.id}/>)}
        </div>
    );
};

export default OrderPage;