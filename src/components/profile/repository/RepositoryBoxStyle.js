import styled from 'styled-components'

export const container = styled.div`
    display: inline-block;
    width: 100%;
    height: 90px;
    border: 0.5px solid #DEE2E6;
    border-radius: 4px;
    grid-area: ${props => "box-" + props.num};
    text-align: center;
    background-color: white;
`

export const repositoryHeader = styled.div`
    text-align: left;
    background-color: #DEE2E6;
    height: 30px;
    width: 100%;
    border-radius: 4px 4px 0 0 4px 4px 0 0;
`

export const title = styled.div`
    font-size: 15px;
    font-weight: 600;
    padding-left: 10px;
    line-height: 30px;
`

export const body = styled.div`
    font-size: 13px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`
