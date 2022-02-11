import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg,#370978 0,#000 100%) no-repeat padding-box;
    position: absolute;
    ::before{
        content: '';
        height: 80%;
        border: 1px solid #ff7500;
        position: absolute;
        top: 0;
        
    }
    ::after{
        content: '';
        /* height: 80%; */
        width: 50%;
        border: 1px solid #ff7500;
        position: absolute;
        top: 80%;
        left: 0;
        /* color: ; */
        
    }
`

export const ButtonIniciarForm = styled.div`
    min-height: 48px;
    margin-top: 50px;
    width: 100%;
    background-color: #03dac6;
    color: #000;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 30px;
    font-family: 'Encode Sans';
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Encode Sans',sans-serif;

`

export const Content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ::before{
        content: '';
        /* height: 80%; */
        width: 95%;
        border: 1px solid #6610f2;
        position: absolute;
        top: 72%;
        left: 0;
        
    }


`
export const DescriptionPrincipal = styled.h1`
font-weight: 800;
width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-family: 'Encode Sans',sans-serif;
    font-weight: 300;
    color: #fff;
    z-index: 2;
    margin: 0;
    font-size: 7vh;
`

export const Desciption = styled.p`
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-family: 'Encode Sans',sans-serif;
    font-weight: 300;
    color: #fff;
    z-index: 2;
    margin: 0;
    font-size: 2.5vh;
    font-weight: 500;

    
    ::after{
        content: '';
        height: 72%;
        /* width: 95%; */
        border: 1px solid #6610f2;
        position: absolute;
        top: 0;
        left: 95%;

    }
`