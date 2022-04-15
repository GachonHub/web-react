import React from 'react';
import style from './Header.module.css';
import '../constants/main.css'

import logoImage from "../assets/main/Logo.svg"

import { useLocation, Link } from 'react-router-dom';


function MenuBar({isBottomOpend, size}) {
    return(
        <div className={`${isBottomOpend ? style.openMenu : style.hideMenu} ${style.menuBar}`} style={size}>
            <div className={`${style.category} ${style.categoryOnLeft} ${style.subCategory}`}>스터디</div>
            <div className={`${style.category} ${style.categoryOnLeft} ${style.subCategory}`}>동아리</div>
            <div className={`${style.category} ${style.categoryOnLeft} ${style.subCategory}`}>공모전</div>
            <div className={`${style.category} ${style.categoryOnLeft} ${style.subCategory}`}>질문게시판</div>
        </div>
    );
}

function CategoryRendering() {//react function
    var isClicked = useLocation().pathname;
    const mainCategory = [["Ranking", "/ranking", "L"], ["Community", "/community", "L"], ["Profile", "/profile", "L"], ["Login", "/login", "R"], ["Help", "/help", "R"]];
    const result = [];

    for (let i=0; i<mainCategory.length; i++) {
        result.push(            
        <Link to={mainCategory[i][1]}>
            <div className={`${style.category} ${(mainCategory[i][2] === "L") ? style.categoryOnLeft : style.categoryOnRight} ${style.mainCategory} ${(isClicked === mainCategory[i][1]) ? style.isCheckedCategory : ""}`}>
                {mainCategory[i][0]}
            </div>
        </Link>
        );
    }
    
    return result;
}
export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBottomOpend : false
        };
    }

    render() {
        const width = window.screen.width;
        const defaultSize = {width : width};
        const { isBottomOpend } = this.state;
        const imageMargin = {left: width/2, marginLeft: '-110px'};

        return (
            <div className={style.header} style={defaultSize}>
                <CategoryRendering></CategoryRendering>
                <MenuBar isBottomOpend={isBottomOpend} size={defaultSize}></MenuBar>

                <img className={style.logo} style={imageMargin} src={logoImage} alt="가천허브 로고"></img>
            </div>
        );
    }
}