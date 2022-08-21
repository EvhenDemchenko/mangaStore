import React from 'react';
import deleteBtn from "../images/deleteicon.png";
import itemModule from './cartitem.module.scss'

const Cartitem = ({item, onDeleteItemFromCart}) => {
    const {src, title, price} = item;

    return (
        <div className={itemModule.wrapper}>
            <img width={100} height={150} src={src} alt="card item"/>
            <div className={itemModule.inner}>
                <h5>{title}</h5>
                <div className={itemModule.price}>
                    <p>цена : </p>
                    <p> {price} грн</p>
                </div>
                <img onClick={() => onDeleteItemFromCart(item)} width={40} height={40} src={deleteBtn} alt="add item"/>
            </div>
        </div>
    );
};

export default Cartitem;