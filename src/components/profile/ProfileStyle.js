import styled from 'styled-components'
import * as C from '../../constants/mainStyle'

export const Container = styled.div`
    padding-top: 50px;
    width: 864px;
    height: 100vh;
    background-color: #F8F9FA;
    margin: auto;
`

export const Main = styled.div`
    display: grid;
    grid-template-columns: 130px 250px 350px;
    grid-template-areas: "img profile description";
    width: 90%;
    height: 150px;
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
    border: 1px solid black;
    margin-top : 30px;
    margin-left : auto;
    margin-right : auto;
    height: 130px;
    width: 90%;
    ${C.basicFont}
`


export const data = {
    id: 50989437,
    nickname: "jaeesu",
    name: "서재희",
    avatarUrl: "https://avatars.githubusercontent.com/u/50989437?v=4",
    company: "none",
    description: "Lörem ipsum anavulingar antism. Astroning sektigt, liksom hemidybel. Iska tira redysm biol. Prostik mms:a, kontragygisk fast kontrakemi samt vosärtad. ",
    major: "컴퓨터공학",
    graduate: true,
    role: "ADMIN",
    createdAt: "2019-05-24T11:35:27Z",
    sns: [
    {
    id: 4,
    category: "TISTORY",
    url: "https://jaeesu.tistory.com/",
    auto: false
    }
    ],
    repos: [
    {
    id: 391266256,
    url: "https://github.com/jaeesu/algorithm",
    name: "algorithm",
    fullName: "jaeesu/algorithm",
    description: null,
    lang: null,
    main: false,
    updatedAt: "2021-07-31 14:16:09.0"
    },
    {
    id: 330998937,
    url: "https://github.com/jaeesu/blockchain",
    name: "blockchain",
    fullName: "jaeesu/blockchain",
    description: null,
    lang: null,
    main: false,
    updatedAt: "2021-03-30 13:25:54.0"
    },
    {
    id: 459487631,
    url: "https://github.com/jaeesu/Wordle",
    name: "Wordle",
    fullName: "jaeesu/Wordle",
    description: "newyork times wordle clone coding",
    lang: null,
    main: true,
    updatedAt: "2022-02-15 08:16:56.0"
    },
    {
    id: 328359481,
    url: "https://github.com/jaeesu/C.CPP",
    name: "C.CPP",
    fullName: "jaeesu/C.CPP",
    description: null,
    lang: null,
    main: false,
    updatedAt: "2021-03-04 14:04:04.0"
    },
    {
    id: 441505781,
    url: "https://github.com/jaeesu/GachonHubBackEnd",
    name: "GachonHubBackEnd",
    fullName: "jaeesu/GachonHubBackEnd",
    description: "토이프로젝트 : Gachonhub 가천대학교 학생들을 위한 github 놀이터 백엔드 개발 저장소",
    lang: null,
    main: true,
    updatedAt: "2022-01-06 04:09:18.0"
    },
    {
    id: 438666030,
    url: "https://github.com/jaeesu/tuthree",
    name: "tuthree",
    fullName: "jaeesu/tuthree",
    description: "졸업프로젝트 : 과외 플랫폼 tuthree 추가 개발",
    lang: null,
    main: false,
    updatedAt: "2021-12-15 14:54:21.0"
    },
    {
    id: 387702365,
    url: "https://github.com/jaeesu/JSP.SPRING",
    name: "JSP.SPRING",
    fullName: "jaeesu/JSP.SPRING",
    description: null,
    lang: null,
    main: false,
    updatedAt: "2021-07-21 06:40:09.0"
    },
    {
    id: 440097524,
    url: "https://github.com/jaeesu/Spring-boot-Lab",
    name: "Spring-boot-Lab",
    fullName: "jaeesu/Spring-boot-Lab",
    description: "Spring Boot 공부 저장소",
    lang: null,
    main: false,
    updatedAt: "2021-12-20 08:36:25.0"
    }
    ],
    groups: [ ]
}