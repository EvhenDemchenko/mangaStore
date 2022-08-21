import React from 'react';
import cart from './cart.module.scss'
import Cartitem from "../../cartitem/cartitem";
import {Link} from "react-router-dom";

const Cart = ({onCartToggle, items, onDeleteItemFromCart}) => {
    return (
        <div className={cart.wrapper}>
            <div onClick={() => onCartToggle()}
                 className={cart.background}></div>
            <div className={cart.container}>
                <h1>
                    КОРЗИНА
                </h1>
                <div className={cart.items}>
                    {items.length === 0
                        ? <h1> У вас еще нет товарок в корзине... 🐸 </h1>
                        : items.map(item => <Cartitem
                            onDeleteItemFromCart={onDeleteItemFromCart}
                            item={item}
                            key={item.id2}/>)
                    }
                </div>
                {items.length !== 0 && <div className={cart.buttons}>
                    <Link to={'orderPage'}>
                        <button onClick={() => onCartToggle()}> Перейти в корзину</button>
                    </Link>
                </div>}
            </div>
        </div>
    );
};

export default Cart;