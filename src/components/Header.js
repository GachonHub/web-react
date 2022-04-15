import React from 'react';
import style from './Header.module.css';
import '../constants/main.css'

import logoImage from "../assets/main/Logo.svg"
// import Suffix from "../assets/main/LogoSuffix.svg"

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


export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isBottomOpend : false,
            isClicked : 1
        };
    }

    render() {
        const width = window.screen.width;
        const defaultSize = {width : width};
        const { isBottomOpend } = this.state;
        const imageMargin = {left: width/2, marginLeft: '-110px'};

        return (
            <div className={style.header} style={defaultSize}>
                <div className={`${style.category} ${style.categoryOnLeft} ${style.mainCategory}`}>Ranking</div>
                {/* <SuffixImg></SuffixImg> */}


                <div className={`${style.category} ${style.categoryOnLeft} ${style.mainCategory}`}
                    onClick={() => this.setState({isBottomOpend: !isBottomOpend})}>Community</div>

                <div className={`${style.category} ${style.categoryOnLeft} ${style.mainCategory}`}>Profile</div>

                <div className={`${style.category} ${style.categoryOnRight} ${style.mainCategory}`}
                    onClick={() => this.setState({isClicked: 4})}
                >Login</div>

                <div className={`${style.category} ${style.categoryOnRight} ${style.mainCategory}`}
                    onClick={() => this.setState({isClicked: 5})}
                >Help</div>

                
                <MenuBar isBottomOpend={isBottomOpend} size={defaultSize}></MenuBar>

                <img className={style.logo} style={imageMargin} src={logoImage} alt="가천허브 로고"></img>
            </div>
        );
    }
}