import React from 'react';
import Item from "../../item/item";
import content from './content.module.scss'

const Content = ({products, onAddItemsToCart, isAdded, iconStyle, doneIconStyle}) => {
    return (
        <div className={content.wrapper}>
            {products.map(item => <Item
                doneIconStyle={doneIconStyle}
                iconStyle={iconStyle}
                isAdded={isAdded}
                onAddItemsToCart={onAddItemsToCart}
                key={item.id2}
                product={item}/>)}
        </div>
    );
};

export default Content;