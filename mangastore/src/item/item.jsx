import React from 'react';
//modules
import item from './item.module.scss';

const Item = ({product, onAddItemsToCart, isAdded, iconStyle, doneIconStyle}) => {
    const {price, title, src} = product;
    const onAddToCart = () => {
        onAddItemsToCart(product);
        isAdded(product);
    }
    return (
        <div className={item.wrapper}>
            <img width={100} height={150} src={src} alt="card item"/>
            <h5>{title}</h5>
            <div className={item.pricecontainer}>
                <div className={item.priceinner}>
                    <p>цена </p>
                    <p>{price} грн</p>
                </div>
                <img onClick={onAddToCart} width={40} height={40} src={product.inCart ? doneIconStyle : iconStyle}
                     alt="add item"/>
            </div>
        </div>
    );
};

export default Item;