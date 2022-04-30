import styled from 'styled-components'

export const MenuBar = styled.div`
    width: ${props => props.logoWidth * 0.8}px;
    margin-left: ${props => props.logoWidth * 0.1}px;
    margin-right: ${props => props.logoWidth * 0.1}px;
    visibility: ${props => props.isOpened};
    background-color: white;
    height: 30px;
    /* border: 1px solid black; */
`

export const Menu = styled.span`
    font-size: 12px;
    font-weight: 550;
    margin-top: 16px;
    margin-left: 30px;
    float: right;
    color: black;
`
