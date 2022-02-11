import  styled  from "styled-components";

export const Container = styled.div`
    width: 100% ;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ContainerTr = styled.div`
    width: 20px;
    height: 20px;
    padding: 25px;
    margin-bottom: 5px;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    
     
    .active{
        background: no-repeat padding-box #370978;
    } 
`

export const ContentTracker = styled.div`
    width: 20px;
    height: 20px;
    padding: 25px;
    margin-bottom: 5px;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
   

`

export const Tracker = styled.div`
    width: 30px;
    display: flex;
    position: absolute;
    z-index: 1000;
    height: 30px;
    background: #FFF;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    left: 15px;
    color: #255;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;

`

export const Home = styled.div`
    width: 100%;
    height: 100%;
    background: no-repeat padding-box #370978;
`

export const Content = styled.div`
    background: no-repeat padding-box #370978;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    /* flex-grow: 1; */
    min-height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
    width: 80%;
    align-items: center;
    /* justify-content: center; */
`

export const ContainerQuestion = styled.div`
    width: 75%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
`

export const GroupQuestion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Question = styled.div`
    width: 100%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin-top: 3em;
    margin-bottom: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-family: Roboto, "Helvetica Neue", sans-serif;
`

export const InputText = styled.input`
    height: 44px;
    width: 90%;
    /* background: no-repeat padding-box #642dc8; */
    border-radius: 33px;
    opacity: 1;
    color: #fff;
    font-family: 'Encode Sans',sans-serif;
    font-weight: 400;
    border-color: transparent;
    font-size: 19px;
    padding: 0.4em 0.4em 0.4em 1em;
    font-size: 16px;
    border: none;
    background: 0% 0% no-repeat padding-box padding-box rgb(100, 45, 200);
    color: rgb(255, 255, 255);

    ::placeholder{
        color: #FFF;
    }

    &:focus{
        color: black;
        background: #FFF;
    }
`
export const GroupInputRadio = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    width: 90%;
`
export const Label = styled.p `
    color: #fff;
    margin: 0.3em 1em 0.3em 0;
    white-space: pre-wrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    
    font-size: 1.2em;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-family: Roboto, "Helvetica Neue", sans-serif;

`

export const InputRadio = styled.input`
    box-sizing: border-box;
    height: 20px;
    /* left: 0; */
    /* position: absolute; */
    /* top: 0; */
    /* transition: border-color ease 280ms; */
    width: 20px;
    margin: 0 10px;
    cursor: pointer;
    /* border-width: 2px; */
    /* border-style: solid; */
    /* border-radius: 50%; */
    /* border-color: rgba(255,255,255,.7); */
`

export const Pergunta = styled.label`
    display: flex;
    /* text-align: center; */
    align-items: flex-start;
    justify-content: start;
    text-align: justify;
    /* text-align: start; */
    font-size: 1.125em;
    color: #fff;
    font-size: 2em;
    font-weight: 300;
    line-height: 1.2em;
    margin-bottom: 1em;
    width: 100%;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    font-family: Roboto, "Helvetica Neue", sans-serif;
`

export const GroupButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between ;
`
export const ButtonVoltar = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    cursor: pointer;

`
export const ButtonAvancar = styled.button`
    background-color: #03dac6;
    color: #000;
    font-size: 2vh;
    cursor: pointer;
    padding: 30px 30px;
    border-radius: 30px;
    font-weight: 400;
    font-family: 'Encode Sans';
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
    display: inline-flex;
    padding: 20px 20px;
    border-radius: 16px;
    align-items: center;
    cursor: default;
    min-height: 32px;
    height: 1px;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    border: none;
    font-family: Roboto, "Helvetica Neue", sans-serif;
`
export const ButtonEnviar = styled.button`
    background-color: #03dac6;
    color: #000;
    font-size: 2vh;
    cursor: pointer;
    padding: 30px 30px;
    border-radius: 30px;
    font-weight: 400;
    font-family: 'Encode Sans';
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
    display: inline-flex;
    padding: 20px 20px;
    border-radius: 16px;
    align-items: center;
    cursor: default;
    min-height: 32px;
    height: 1px;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 400;
    font-stretch: normal;
    border: none;
    font-family: Roboto, "Helvetica Neue", sans-serif;
`
export const LabelSlider = styled.h1`
    font-size: 1.6em;
    color: #03dac6;
    font-size: 1.875em;
    font-weight: 500;
    text-align: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Encode Sans',sans-serif;
    line-height: 1.2;
    margin-top: 1em;
`
