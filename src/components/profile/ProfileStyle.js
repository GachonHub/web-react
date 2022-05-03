import styled from 'styled-components'
import * as C from '../../constants/mainStyle'

export const Container = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    padding-top: 50px;
    width: ${props => props.width * 0.8}px;
    height: 100vh;
    background-color: #F8F9FA;
    margin: auto;
    border-radius: 15px;
    margin-top: 30px;
`

export const Main = styled.div`
    display: grid;
    grid-template-columns: 120px 300px ;
    grid-template-areas: "img profile description";
    width: 90%;
    height: 120px;
    border: 1px solid #DEE2E6;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 4px;
`

export const imgDiv = styled.div`
    grid-area: "img";
    overflow: hidden;
`

export const img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px 4px 0 0 4px 4px 0 0;

`

export const profileDiv = styled.div`
    padding-left: 30px;
    padding-top: 20px;
    padding-top: 20px;
    grid-area: "profile";
`

export const description = styled.div`
    grid-area: "description";
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`

export const mainProfile = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
`

export const basicProfile = styled.div`
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 500;
`

export const Repository = styled.div`
    margin-left : auto;
    margin-right : auto;
    height: 130px;
    width: 90%;
`

export const BodyTitle = styled(mainProfile)`
    margin-top: 30px;
    margin-bottom: 10px;
    ${C.basicFont}
`

export const RepositoryBoxDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "box-1 box-2 box-3";
    grid-column-gap: 30px;
    width: 100%;
`

export const Readme = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;

`

export const emptyBody = styled.div`
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 600;
    background-color: white;
    border: 1px solid #DEE2E6;
    border-radius: 4px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const MarkDown = styled.div`
    padding: 20px;
    font-size: 12px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #DEE2E6;
`
