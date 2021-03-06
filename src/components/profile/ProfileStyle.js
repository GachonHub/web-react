import styled from 'styled-components'
import * as C from '../../constants/mainStyle'

export const Container = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
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


export const userName = `jaeesu`;
export const mainReadMe = undefined;

// export const mainReadMe = `## Seo Jaehui ????   


// ### ???? ??????


// * ??????????????? ?????????????????? ?????? (2019.03 ~ 2022.02)


// * Central MakeUs Challenge (CMC) 9??? Server ?????? ?????? (2022.02 ~ 2022.04)


// ### ???? ??????, ????????? ?????? ?????? ???

// * ????????? ?????? ????????? ?????? ???????????? ???????????? ?????? ???????????? ???

// * Spring, Java ?????? ???


// ### ?????????, ?????????

// * notion : https://www.notion.so/09267ad39b54480da4fd1f6efc91c5f7
// * tistory : https://jaeesu.tistory.com/`;


// https://raw.githubusercontent.com/jaeesu/jaeesu/master/README.md
export const data = {
    id: 50989437,
    nickname: "jaeesu",
    name: "?????????",
    avatarUrl: "https://avatars.githubusercontent.com/u/50989437?v=4",
    company: "none",
    description: "L??rem ipsum anavulingar antism. Astroning sektigt, liksom hemidybel. Iska tira redysm biol. Prostik mms:a, kontragygisk fast kontrakemi samt vos??rtad. ",
    major: "???????????????",
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
        //custom
    {
    id: 391266256,
    url: "https://github.com/jaeesu/jaeesu",
    raw_url: "https://raw.githubusercontent.com/jaeesu/jaeesu/master/README.md",
    name: "algorithm",
    fullName: "jaeesu/algorithm",
    description: null,
    lang: null,
    main: false,
    updatedAt: "2021-07-31 14:16:09.0"
    },
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
    description: "?????????????????? : Gachonhub ??????????????? ???????????? ?????? github ????????? ????????? ?????? ?????????",
    lang: null,
    main: true,
    updatedAt: "2022-01-06 04:09:18.0"
    },
    {
    id: 438666030,
    url: "https://github.com/jaeesu/tuthree",
    name: "tuthree",
    fullName: "jaeesu/tuthree",
    description: "?????????????????? : ?????? ????????? tuthree ?????? ??????",
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
    description: "Spring Boot ?????? ?????????",
    lang: null,
    main: false,
    updatedAt: "2021-12-20 08:36:25.0"
    }
    ],
    groups: [ ]
}