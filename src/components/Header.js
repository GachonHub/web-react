import React, { useState } from 'react';
import style from './Header.module.css';
import '../constants/mainStyle.js'

import logoImage from "../assets/main/Logo.svg"

import { Link } from 'react-router-dom';


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

function GetLocation(){
    const val = useState("0");
    return val;
}
export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBottomOpend : false
        }
    }

    render() {
        const width = window.screen.width;
        const defaultSize = {width : width};
        const imageMargin = {left: width/2, marginLeft: '-110px'};
        const mainCategory = [["Ranking", "/ranking", "L"], ["Community", "/community", "L"], ["Profile", "/profile", "L"], ["Login", "/login", "R"], ["Help", "/help", "R"]];

        console.log(this.props);
        var isBottomOpend = this.state.isBottomOpend;

        var time="";

        // const val = <GetLocation></GetLocation>;

        return (
            <div className={style.header} style={defaultSize}>
            {
                mainCategory.map(item => 
                    (
                        <Link key={item[0]} to={item[1]}>
                            <div key={item[0]} className={`${style.category} ${(item[2] === "L") ? style.categoryOnLeft : style.categoryOnRight} ${style.mainCategory} ${(time === item[1]) ? style.isCheckedCategory : undefined}`}
                                onClick={() => (item[0] === "Community") ? (this.setState({isBottomOpend: !isBottomOpend})) : undefined} >
                                {item[0]}
                            </div>
                        </Link>
                    )
                )
            }
            <GetLocation></GetLocation>
            <MenuBar isBottomOpend={isBottomOpend} size={defaultSize}></MenuBar>
                <img className={style.logo} style={imageMargin} src={logoImage} alt="가천허브 로고"></img>
            </div>
        );
    }
}