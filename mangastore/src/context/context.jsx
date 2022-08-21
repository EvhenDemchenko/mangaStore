import {createContext} from "react";
import whiteBtn from '../images/whiteaddbtn.png'
import darkBtn from '../images/plusBtn.png'
import addWhitebtn from '../images/doneicon.png'
import addDarkBtn from '../images/greenDone.png'

export const theme = {
    background: {
        darkMode: "green",
        lightMode: "darkgray",
    },
    addBtn: {
        white: whiteBtn,
        dark: darkBtn,
    },
    doneBtn: {
        white: addWhitebtn,
        dark: addDarkBtn
    }
}

export const themContext = createContext([]);
export const btnContext = createContext([]);
export const addBtnContext = createContext([]);
