import React, { useState } from 'react';
import '../constants/mainStyle.js'

import logoImage from "../assets/main/Logo.svg"

import * as P from "./HeaderStyle"

// import { Link } from 'react-router-dom';

// const GetMainCategory = (item, isBottomOpend) => {

//     const res = [];

//     for (let i=0; i<item.length; i++) {
//         res.push(
//             <Link key={item[0]} to={item[1]}>
//                 <div key={item[0]} className={`${style.category} ${(item[2] === "L") ? style.categoryOnLeft : style.categoryOnRight} ${style.mainCategory}`}
//                     onClick={() => (item[0] === "Community") ? (this.setState({isBottomOpend: !isBottomOpend})) : undefined} >
//                     {item[0]}
//                 </div>
//             </Link>
//         );
//     }
    
//     return res;
// }



export class Header extends React.Component {

    render() {

        return (
            <P.Header headerWidth={window.screen.width}>
                <P.Logo>
                    <P.LogoImg src={logoImage}></P.LogoImg>

                    <P.Category>Login</P.Category>
                    <P.Category>Help</P.Category>
                    <P.Category>Community</P.Category>
                    <P.Category>Ranking</P.Category>

                </P.Logo>
            </P.Header>
        );
    }
}