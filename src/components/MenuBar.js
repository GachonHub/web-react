import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './MenuBarStyle'

export function MenuBar(props) {

    const community = [["스터디", "/study"], ["동아리", "/crew"], ["공모전", "/contest"], ["질문게시판", "/question"]];
    const help = [["문의사항", "/inquiry"], ["공지사항", "/notice"]];

    var list = (props.category === "Community") ? community : help;

    const res = [];
    var size=props.size;
    
    for (const menu in list) {
        console.log(size);
        res.push(
            <Link key={list[menu][1]} to={list[menu][1]}>
                <C.Menu key={list[menu][1]}>{list[menu][0]}</C.Menu>
            </Link>
        );
    }

    return <C.MenuBar isOpened={(props.isOpened) ? "visible" : "hidden"} logoWidth={size}>{res}</C.MenuBar>;
}
