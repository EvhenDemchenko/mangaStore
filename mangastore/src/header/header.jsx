import React from 'react';
//modules
import header from './header.module.scss';
import cartLogo from '../images/cart.png';
import mangaLogo from '../images/manga-logo.png';
import favourite from '../images/hartIcon.png';
import {useContext} from "react";
import {theme, themContext, btnContext, addBtnContext} from '../context/context';
import {Link} from "react-router-dom";

const Header = ({onCartToggle}) => {
    const [themeColor, setThemeColor] = useContext(themContext);
    const [themeBtn, setThemeBtn] = useContext(btnContext);
    const [themeDoneBtn, setThemeDoneBtn] = useContext(addBtnContext);

    const changeColor = () => {
        if (themeDoneBtn === theme.doneBtn.white) {
            setThemeDoneBtn(theme.doneBtn.dark)
        } else {
            setThemeDoneBtn(theme.doneBtn.white)
        }
        if (themeBtn === theme.addBtn.white) {
            setThemeBtn(theme.addBtn.dark);
        } else {
            setThemeBtn(theme.addBtn.white)
        }
        if (themeColor === theme.background.lightMode) {
            setThemeColor(theme.background.darkMode);
        } else {
            setThemeColor(theme.background.lightMode)
        }
    }

    return (
        <div className={header.wrapper}>
            <div className={header.logoWrapper}>
                <Link to={'/'}>
                    <img width={50} height={50} src={mangaLogo} alt="manga-logo"/>
                </Link>
                <h1> Manga Store </h1>
            </div>
            <div className={header.sum}>
                <button
                    onClick={changeColor}
                > changeTheme
                </button>
                <img src={favourite} width={32} height={32} alt="favourite"/>
                <p> Сумма : 1499 грн</p>
                <img width={32} height={32}
                     onClick={() => onCartToggle()}
                     className={header.cartIcon}
                     src={cartLogo}
                     alt="cartLogo"/>
            </div>
        </div>
    );
};

export default Header;