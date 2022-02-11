import React from "react";
import { ButtonIniciarForm, Container, Content, Desciption, DescriptionPrincipal } from "./style";
import { useHistory } from 'react-router-dom'
const PageHome = () => {
    const history = useHistory()
    return (
        <Container>
            <Content>
                <div style={{width:'50%'}}>
                <DescriptionPrincipal>
                Seu negócio está preparado para a <span style={{"color": "#ff7500"}}> era digital?</span>
                </DescriptionPrincipal>
                </div>
            </Content>
            <Content>
                <div style={{width:'50%'}}>
                <Desciption>
                Descubra o nível de transformação digital da sua organização. Ao final da pesquisa, além do seu resultado, você receberá uma análise detalhada com recomendações importantes para acelerar a transformação na sua empresa.
                </Desciption>
                <ButtonIniciarForm id='iniciarForm' onClick={() => {
                    history.push('/formulario')
                }} >Iniciar pesquisa</ButtonIniciarForm>
                </div>
            </Content>
        </Container>
    )
}

export default PageHome;