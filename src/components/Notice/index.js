import React from 'react';
import styled from "styled-components";

import * as MockData from './indexMockData'

const Notice = styled.div`
    padding-top:${props => props.width * 0.03}px; 
    padding-left:${props => props.width * 0.1}px; 
    padding-right:${props => props.width * 0.1}px; 
    width: ${props => props.width * 0.8}px;
`;

const TopInfo = styled.div`
    margin: 0 auto;
    display:flex;
    font-size:20px;
    margin-bottom:30px;
`;

const TitleInfo = styled.div`
    display:flex;
    margin-bottom:30px;
    h1 {
        margin:0;
        color: #87A0E1;
    }
    span {
        margin: auto 0 0 0;
        color: #949494;
        margin-left:20px;
    }
`;

const ContentInfo = styled.div`
    width: 100%;
    min-height: ${props => props.height * 0.5}px;
    margin-bottom:${props => props.width * 0.05}px;

    background: #F8F9FA;
    border: 1px solid #ECEEF1;
    box-sizing: border-box;
    border-radius: 5px;

    padding: 3%;
`;

const NoticeBlock = () => {

    const width = window.screen.width;
    const height = window.screen.height;
    return (
        <Notice width={width}>
            <TopInfo>
                <span>공지사항</span>
                {/* <span className="right-arrow"> &gt; </span> */}
            </TopInfo>
            <TitleInfo>
                <h1>{MockData.data1.title}</h1>
                <span>{MockData.data1.writeAt}</span>
            </TitleInfo>
            <ContentInfo width={width} height={height}>
                <span>{MockData.data1.content}</span>
            </ContentInfo>
        </Notice>
    )
}
export default NoticeBlock;