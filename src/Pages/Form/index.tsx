import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box';
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { ButtonAvancar, Question, Container, Content, ContainerQuestion, InputText, Pergunta, GroupButton, ButtonVoltar, GroupQuestion, GroupInputRadio, Label, InputRadio, LabelSlider, Tracker, ContainerTr, ContentTracker, ButtonEnviar } from '../../style'
import { Modal, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Formulario = () => {

  const [slide1, setSlide1] = useState<number>(0);
  const [slide2, setSlide2] = useState<number>(0)
  const [slide3, setSlide3] = useState<number>(0)
  const [slide4, setSlide4] = useState<number>(0)
  const [slide5, setSlide5] = useState<number>(0)
  const [slide6, setSlide6] = useState<number>(0)
  const [validar, setValidar] = useState<boolean>(false)
  const [nome, setNome] = useState<string>(' ')
  const [email, setEmail] = useState<string>(' ')
  const [tamanho, setTamanho] = useState<string>(' ');
  const [funcionarios, setFuncionarios] = useState<string>(' ');
  // React.ChangeEvent<HTMLInputElement>
  const HandleSlide1 = (e: any) => {
    setSlide1(e.target.value)
  }
  const HandleSlide2 = (e: any) => {
    setSlide2(e.target.value)
  }
  const HandleSlide3 = (e: any) => {
    setSlide3(e.target.value)
  }
  const HandleSlide4 = (e: any) => {
    setSlide4(e.target.value)
  }
  const HandleSlide5 = (e: any) => {
    setSlide5(e.target.value)
  }
  const HandleSlide6 = (e: any) => {
    setSlide6(e.target.value)
  }

  useEffect(() => {
    if (email !== '' && nome !== ' ' && tamanho !== ' ' && funcionarios !== ' ') {
      setValidar(true)
    }
  }, [nome, email, tamanho, funcionarios])

  useEffect(() => {
    if (slide1 !== 0 && slide2 !== 0 && slide3 !== 0) {
      setValidar(true)
    }
  }, [slide1, slide2, slide3])

  useEffect(() => {
    if (slide4 !== 0 && slide5 !== 0 && slide6 !== 0) {
      setValidar(true)
    }
  }, [slide4, slide5, slide6])

  const marks = [
    {
      value: 0,
      label: 'arraste para responder'
    },
    {
      value: 1,
      label: 'discordo totalmento'
    },
    {
      value: 2,
      label: 'discordo'
    },
    {
      value: 3,
      label: "discordo em parte"
    },
    {
      value: 4,
      label: 'não sei/não se aplica'
    },
    {
      value: 5,
      label: 'concordo em parte'
    },
    {
      value: 6,
      label: 'concordo'
    },
    {
      value: 7,
      label: 'concordo totalmente'
    }
  ]

  return (
    <FormikStepper

      initialValues={{
        firstName: ''
      }}

      validateOnChange={validar}
      setValidar={setValidar}
      onSubmit={() => { }}
    >
      <GroupQuestion >
        <Question>
          <Pergunta>Qual o nome da sua organização</Pergunta>
          <InputText onChange={(e) => { setNome(e.target.value) }} value={nome} className='informacao' name='nome' id='nome' placeholder="Digite aqui a sua resposta" />
        </Question>
        <Question>
          <Pergunta>Qual o email de contato</Pergunta>
          <InputText onChange={(e) => { setEmail(e.target.value) }} value={email} className='informacao' id='email' name='email' placeholder="Digite aqui a sua resposta" />
        </Question>
        <Question>
          <Pergunta>Qual o tamanho da sua organização ?</Pergunta>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setTamanho(e.target.value) }} type='radio' id='microEmpresa' name='tamanho' value='microEmpresa' required />
            <Label>Microempresa [Receita ≤ R$ 360 mil]</Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setTamanho(e.target.value) }} type='radio' id='pequenaEmpresa' name='tamanho' value='pequenaEmpresa' />
            <Label > Pequena Empresa [Receita &gt; R$ 360 mil e ≤ R$ 4,8 milhões] </Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setTamanho(e.target.value) }} type='radio' id='mediaEmpresa' name='tamanho' value='mediaEmpresa' required />
            <Label > Media Empresa [Receita &gt; R$ 4,8 milhões e ≤ R$ 300 milhões] </Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setTamanho(e.target.value) }} type='radio' id='grandeEmpresa' name='tamanho' value='grandeEmpresa' required />
            <Label > Grande Empresa [Receita &gt; R$ 300 milhões] </Label>
          </GroupInputRadio>
        </Question>
        <Question >
          <Pergunta>Sua Organização tem quantos colaboradores? </Pergunta>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setFuncionarios(e.target.value) }} className='informacao' type='radio' id='colaboradores19' name='quantidade' value='colaboradores19' />
            <Label>Até 19 colaboradores</Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setFuncionarios(e.target.value) }} className='informacao' type='radio' id='colaboradores99' name='quantidade' value='colaboradores99' />
            <Label>Entre 20 a 99 colaboradores</Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setFuncionarios(e.target.value) }} className='informacao' type='radio' id='colaboradores499' name='quantidade' value='colaboradores499' />
            <Label>Entre 100 a 499 colaboradores</Label>
          </GroupInputRadio>
          <GroupInputRadio>
            <InputRadio onChange={(e) => { setFuncionarios(e.target.value) }} className='informacao' type='radio' id='colaboradores500' name='quantidade' value='colaboradores500' />
            <Label>Mais de 500 colaboradores</Label>
          </GroupInputRadio>
        </Question>
      </GroupQuestion>
      <GroupQuestion>
        <Question>
          <Pergunta>Nossas iniciativas de Inovação e Transformação Digital são tocadas por times multidisciplinares de diferentes setores da organização.
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              id="iniciativaInovacao"
              name="iniciativaInovacao"
              aria-label="Temperature"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide1}
            />
          </Box>
          {marks.filter(e => e.value === slide1)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
        <Question>
          <Pergunta>Não existe um estímulo organizacional para que as pessoas tenham espaço para dar sua opinião ou sugerir novas ideias. É esperado que esse papel seja desempenhado exclusivamente pela alta gerência.
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              id="estimuloOrganizacional"
              name="estimuloOrganizacional"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide2}
            />
          </Box>
          {marks.filter(e => e.value === slide2)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
        <Question>
          <Pergunta>Nossa liderança tem um claro entendimento de como as tendências digitais e tecnologias emergentes têm mudado o cenário de atuação da organização.
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              id="lideranca"
              name="liderenca"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide3}
            />
          </Box>
          {marks.filter(e => e.value === slide3)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
      </GroupQuestion>
      <GroupQuestion>
        <Question>
          <Pergunta>Encorajamos nossos clientes a adotar canais digitais para entrar em contato conosco durante todas as fases da venda (pré-venda, pós-venda, SAC etc.).
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              id="encorajamento"
              name="encorajamento"
              aria-label="Temperature"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide4}
            />
          </Box>
          {marks.filter(e => e.value === slide4)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
        <Question>
          <Pergunta>Nossos canais digitais têm métricas bem definidas e conseguimos medir e acompanhar o desempenho de cada um deles.
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              id="canaisDigitais"
              name="canaisDigitais"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide5}
            />
          </Box>
          {marks.filter(e => e.value === slide5)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
        <Question>
          <Pergunta>A organização usa diferentes estratégias em seus vários canais digitais para aumentar o engajamento do consumidor.
          </Pergunta>
          <Box sx={{ width: '80%' }}>
            <Slider
              name="estrategias"
              id="estrategias"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={7}
              onChange={HandleSlide6}
            />
          </Box>
          {marks.filter(e => e.value === slide6)
            .map((item) => <LabelSlider>{item.label}</LabelSlider>)}
        </Question>
      </GroupQuestion>
    </FormikStepper>
  )
}

export const FormikStepper = ({ children, ...props }: any) => {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false)
  const currentChild = childrenArray[step];
  const history = useHistory()
  console.log(Object.values(currentChild)[4])
  let valid = !props.validateOnChange
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: '50%',
      height: "50%",
      background: 'no-repeat padding-box #370978',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      color: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));


  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  // if(step === (childrenArray.length - 1)){
  //   document.getElementById('submitHidden').value = true
  // }

  return (
    <Formik au {...props}>

      <Container>
        <div style={{ width: '30%', height: '100%', color: "#FFF", display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          {
            childrenArray.map((item, index) => {
              return (
                <ContainerTr>
                  <ContentTracker className={index === step ? 'active' : ''} id={index.toString()}>
                    <Tracker>{index}</Tracker>
                  </ContentTracker>
                </ContainerTr>
              )
            })
          }
        </div>
        <Content>
          <ContainerQuestion>
            {currentChild}
            <Modal open={openModal}>
              <div style={modalStyle} className={classes.paper}>
                <Pergunta style={{ alignItems: 'center', justifyContent: 'center' }}>Formulário enviado com sucesso!</Pergunta>
              </div>
            </Modal>
            <Question>
              <GroupButton>
                {step > 0 ? <ButtonVoltar onClick={() => { setStep(step - 1) }}>&lt; <span style={{ textAlign: 'center', paddingBottom: '5px' }}>-</span></ButtonVoltar> : <div></div>}
                  <ButtonAvancar style={step !== (childrenArray.length - 1) ? {display: 'flex'}: {display: 'none'}} type='button' disabled={valid} name={`etapa_${step + 1}`} onClick={() => {
                    setStep(step + 1)
                    props.setValidar(false)
                  }}> Próximo </ButtonAvancar>
                  <ButtonEnviar style={step === (childrenArray.length - 1) ? {display: 'flex'}: {display: 'none'}}  type='button' disabled={valid} id="submit" name="submit" onClick={() => {
                    setOpenModal(!openModal)
                    props.setValidar(false)
                    setTimeout(() => {
                      setOpenModal(false)
                      history.push('/')
                    }, 2000)
                    setStep(0)
                  }}
                  >Enviar</ButtonEnviar>
              </GroupButton>
            </Question>
          </ContainerQuestion>
        </Content>
      </Container>
    </Formik>
  )
}

export default Formulario