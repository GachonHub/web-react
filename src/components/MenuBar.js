import React from 'react'
import * as P from './HeaderStyle'

export function MenuBar(props) {

    const community = ["스터디", "동아리", "공모전", "질문게시판"];
    const help = ["문의사항", "공지사항"];

    var list = (props.category === "Community") ? community : help;

    const res = [];
    var size=props.size;
    
    for (const menu in list) {
        console.log(size);
        res.push(
            <P.Menu key={list[menu]}>{list[menu]}</P.Menu>
        );
    }

    return <P.MenuBar isOpened={(props.isOpened) ? "visible" : "hidden"} logoWidth={size}>{res}</P.MenuBar>;
}
