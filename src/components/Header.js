import React from 'react';
import '../constants/mainStyle.js'

import logoImage from "../assets/main/Logo.svg"

import * as P from "./HeaderStyle"

import { Link } from 'react-router-dom';
import {MenuBar} from './MenuBar'

export class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpened : false,
            category : "Ranking"
        }
    }

    clickEvent = (e) => {
        if (e.target.id === "Community" || e.target.id === "Help") {
            this.setState({isOpened: !this.state.isOpened});
            this.setState({category: e.target.id});

        }
    }

    GetMainCategory = (props) => {
        const res = [];
        const item = props.item;
    
        for (let i=0; i<item.length; i++) {
            res.push(
                <Link key={item[i][0]} to={item[i][1]}>
                    <P.Category onClick={this.clickEvent} key={item[i][0]} id={item[i][0]}>
                        {item[i][0]}
                    </P.Category>
                </Link>
            );
        }


        return res;
    }

    render() {

        const list = [["Login", "/login"], ["Help", "/help"], ["Profile", "/profile"], ["Community", "/community"], ["Ranking", "/ranking"]];


        return (
            <P.Header headerWidth={window.screen.width}>
                <P.Logo>
                    <P.LogoImg src={logoImage}></P.LogoImg>
                    <this.GetMainCategory item={list}></this.GetMainCategory>
                </P.Logo>
                
                {/* <GetMenuBar category={this.state.category} size={window.screen.width}></GetMenuBar> */}
                <MenuBar isOpened={this.state.isOpened} category={this.state.category} size={window.screen.width}></MenuBar>
                
            </P.Header>
        );
    }
}

