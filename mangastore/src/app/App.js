//components
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {addBtnContext, btnContext, themContext, theme} from "../context/context";
import Header from "../header/header";
import Content from "../pages/content/content"
//module
import axios from "axios";
import app from './app.module.scss'
import Cart from "../pages/cart/cart";
import OrderPage from "../pages/orderPage/orderPage";

function App() {

    const [items, setItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [currentTheme, setCurrentTheme] = useState(theme.background.lightMode);
    const [currentBtn, setCurrentBtn] = useState(theme.addBtn.dark);
    const [currentAddBtn, setCurrentAddBtn] = useState(theme.doneBtn.white);

    const onCartToggle = () => {
        setCartOpened(!cartOpened);
    };
    const onAddItemsToCart = (item) => {
        let inArray = false;
        cartItems.forEach(i => {
            if (i.id2 === item.id2) {
                inArray = true;
            }
        })
        if (!inArray) {
            setCartItems([...cartItems, item])
            item.inCart = true;
            axios.post('https://62f600ee612c13062b4441c2.mockapi.io/todo/cart', item);
            axios.put(`https://62f600ee612c13062b4441c2.mockapi.io/todo/items/${item.id}`, item);
        }
    }
    const getCurrentId = (items, id2) => {
        return items.filter(item => {
            if (item.id2 === id2) {
                return item;
            }
        })
    }
    const onDeleteItemFromCart = (item) => {
        const mapRes = items.map((i, index) => {
            if (i.id2 === item.id2) {
                axios.get(`https://62f600ee612c13062b4441c2.mockapi.io/todo/cart`)
                    .then(res => res.data)
                    .then(res => {
                        const {id} = getCurrentId(res, item.id2)[0];
                        return id;
                    })
                    .then(id => {
                        axios.delete(`https://62f600ee612c13062b4441c2.mockapi.io/todo/cart/${id}`).then(res => console.log(res))
                    })
                i.inCart = false;
                axios.put(`https://62f600ee612c13062b4441c2.mockapi.io/todo/items/${i.id}`, i)
                return i;
            } else {
                return i;
            }
        })
        setItems([...mapRes]);

        const filterRes = cartItems.filter(i => {
            if (i.id2 !== item.id2) {
                return i;
            } else {
                i.inCart = false;
            }
        })
        setCartItems([...filterRes])
    }
    const isAdded = (item) => {
        const res = items.map(i => {
            if (i.id2 === item.id2) {
                i.inCart = true;
            }
            return i;
        })
        setItems([...res])
    }

    //data from server
    useEffect(() => {
        axios.get('https://62f600ee612c13062b4441c2.mockapi.io/todo/items')
            .then(res => setItems([...res.data]));
        axios.get('https://62f600ee612c13062b4441c2.mockapi.io/todo/cart')
            .then(res => {
                setCartItems(prevState => [...res.data])
            })
    }, [])

    return (
        <themContext.Provider value={[currentTheme, setCurrentTheme]}>
            <btnContext.Provider value={[currentBtn, setCurrentBtn]}>
                <addBtnContext.Provider value={[currentAddBtn, setCurrentAddBtn]}>
                    <BrowserRouter>
                        <div className={currentTheme === theme.background.darkMode
                            ? app.darkgray
                            : app.green
                        }>
                            <Header onCartToggle={onCartToggle}/>
                            <Routes>
                                <Route path="/" element={<Content
                                    doneIconStyle={currentAddBtn}
                                    iconStyle={currentBtn}
                                    isAdded={isAdded}
                                    products={items}
                                    onAddItemsToCart={onAddItemsToCart}
                                />}/>
                                <Route path="orderPage" element={<OrderPage items={cartItems}
                                                                            onDeleteItemFromCart={onDeleteItemFromCart}/>}/>
                            </Routes>
                            {cartOpened && <Cart
                                onDeleteItemFromCart={onDeleteItemFromCart}
                                cartOpened={cartOpened}
                                items={cartItems}
                                onCartToggle={onCartToggle}
                            />}
                        </div>
                    </BrowserRouter>
                </addBtnContext.Provider>
            </btnContext.Provider>
        </themContext.Provider>
    );
}

export default App;
