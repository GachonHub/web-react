import styled from 'styled-components'


export const Header = styled.div`
    font-family: "Nanum Gothic";
    height: 40px;
    width: ${props => props.headerWidth}px;
`

export const Logo = styled.div`
    height: 40px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`

export const LogoImg = styled.img`
    height: 23px;
    margin-top: 17px;
`

export const Category = styled.span`
    font-size: 14px;
    font-weight: 600;
    float: right;
    margin-top: 24px;
    margin-left: 30px;
    color: black;
    cursor: pointer;
`