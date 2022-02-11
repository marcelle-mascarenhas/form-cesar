# Acompanhamento do Formulário através do GTM e GA4

O nosso objetivo é rastrear o comportamento do usuário dentro de um formulário através de eventos JavaScript personalizados. Utilizamos o Google Tag Manager (GTM) para coletar os dados de interação do usuário e, posteriormente, enviá-los ao Google Analytics para gerar relatórios de acompanhamento. 

A seguir, iremos apresentar o passo a passo para execução do MVP:

# # Instalando o Google Analytics
**1 - Acesse o Google Analytics e crie uma conta**

Acesse: https://accounts.google.com/Login?service=analytics e clique em `Criar conta`.

![1_google](https://user-images.githubusercontent.com/82230820/145279589-0270e442-5388-42d7-9dd1-ea4be9573f50.png)

**2 - Crie uma propriedade e um fluxo de dados do Google Analytics 4**

Acesse a  seção Admin  da interface do Google Analytics (clicando em  Admin  no canto inferior esquerdo) e depois (na  seção Propriedade) clique em  `Criar propriedade`.

![1](https://user-images.githubusercontent.com/82230820/145282645-1380aa48-4cb9-47a6-aa21-fc01094cd0eb.png)

Em seguida, insira o nome da propriedade “Form Demo – Grupo Cesar 1”. Escolha o país, o fuso horário do relatório e a moeda principal.

![2](https://user-images.githubusercontent.com/82230820/145280897-bc67db00-761f-40f8-8e97-c21c655aaca4.jpg)

Pessione Avançar, responda a várias perguntas, clique em `Criar` e sua nova propriedade estará pronta. A próxima etapa a ser concluída é configurar seu primeiro fluxo de dados. É uma fonte de dados a partir da qual os eventos serão enviados para sua propriedade do Google Analytics 4.

![4](https://user-images.githubusercontent.com/82230820/145281586-a2712ace-1683-4dd3-8a99-4e3cb6fe1e06.png)

Em seguida, insira o URL do site https://formdemo-cesar1.netlify.app. Depois disso, digite o nome do site que queremos trackear “Formulario Grupo Cesar 1”. Quando estiver pronto, pressione o botão `Criar stream`.

![5](https://user-images.githubusercontent.com/82230820/145285304-0393980f-c2ff-4d8d-865f-d77d99d34465.png)

# # Instalando o Google Tag Manager (GTM)
**1 – Inscreva-se na plataforma**

Acesse: https://tagmanager.google.com e use sua conta do Google para acessar. Clique em “Criar conta” e, em seguida, dê nome a sua conta e crie um novo container preenchendo os locais informados. Após preencher as informações, pressione o botão `Criar`.

![6](https://user-images.githubusercontent.com/82230820/145286065-8c485350-0b89-4fc7-879b-ef8410f7aad4.png)
![7](https://user-images.githubusercontent.com/82230820/145286094-07edeeba-1885-42fd-b3a1-3c6a725804b9.png)

**2 – Instruções de codificação**

Logo, em seguida, serão gerados um código e as instruções para incluí-los no seu site. Copie esse código JavaScript e cole-o o mais próximo possível da abertura do HTML `<head>`. Copie, então, o segundo trecho e cole-o imediatamente após a abertura do `<body>`: 
  
![codigo](https://user-images.githubusercontent.com/82230820/145286535-f6f36ae6-a201-49e8-8b84-5df326395f52.png)

**3 – Adicionando Tags**
  
Após instalado o código do GTM, será necessário criar as tags que vão ajudar a acompanhar o desempenho do site. No nosso caso, o formulário é o próprio site e as tags vão mostrar como os usuários interagem com o mesmo.
  
**Etapa 1.** Clique em Tags no menu do lado esquerdo:

  ![8](https://user-images.githubusercontent.com/82230820/145288150-e26a81a6-dd5a-4e41-af41-51e624f3e05d.png)

**Etapa 2.** Clique no botão Nova pra criar uma nova tag:
  
  ![9](https://user-images.githubusercontent.com/82230820/145288168-f036d421-3be6-44f9-8664-b601c88c4e30.png)

**Etapa 3.** Nomeei a Tag, como por exemplo, “Start Form” e, em seguida, clique em Configuração da tag:
  
  ![11](https://user-images.githubusercontent.com/82230820/145288236-514e5917-9907-48f6-9e33-b994cde4b562.png)

Uma sobreposição aparecerá do lado direito com uma lista de modelos de tag. Em seguida, clique na opção HTML personalizado:

![12](https://user-images.githubusercontent.com/82230820/145288289-4bcf37b4-f595-48fc-91f1-b2ce7bcf4665.png)

**Etapa 4.** Crie uma nova tag HTML personalizada:
Criamos um código JavaScript personalizado que “escuta” uma ação na página e envia um evento para o objeto dataLayer. No código apresentado, o evento “startForm” é acionado assim que alguém clica no botão Iniciar pesquisa. Esse evento será impulsionado para o dataLayer quando o DOM estiver pronto. 

![13](https://user-images.githubusercontent.com/82230820/145288363-9eecf2d0-046b-4b44-b0a7-0302b8cfaf05.png)
	
**Etapa 5.** Crie um novo acionador do tipo Evento personalizado que corresponda ao evento definido pelo push da camada de dados na etapa 4. Para usar esse evento no GTM, navegue até Acionadores > Novo > Evento personalizado e insira o nome do evento = “startForm”.
  
  ![15](https://user-images.githubusercontent.com/82230820/145288391-78cb4157-3484-4dd4-94e5-3fd15c929a60.png)

**Etapa 6.** Crie uma nova tag Google Analytics: evento do GA4 e insira o ID de rastreamento do Google Analytics 4. Em seguida, preencha com o nome do evento “start_form” e use o acionador criado anteriormente. Feito isso, clique em salvar.

  ![16](https://user-images.githubusercontent.com/82230820/145288490-f767ef50-0f2b-4e85-89a2-071836f7384b.png)
  
**Etapa 7.** Navegue de volta em Tags, selecione a tag criada “Event - startFom” e clique em enviar. Esse evento foi enviado ao Google Analytics. 

  ![17](https://user-images.githubusercontent.com/82230820/145288542-27d3be44-75a3-4e11-9854-f2bc3aae6778.png)

**4 – Visualizando os dados no Google Analytics 4**

**Etapa 8.** Navegue até o relatório Tempo real no GA4 e você irá acompanhar a contagem do evento personalizado “Start_form”. O relatório também dá informações detalhadas sobre o desempenho de cada evento criado.
  
  ![18](https://user-images.githubusercontent.com/82230820/145289091-cd92ed92-21db-47af-98b9-7754a0a675fb.png)

# # Códigos
**1.	Formulário**

O nosso formulário foi desenvolvido em React Java Script. Todos os arquivos estão no repositório. 

**2.	Eventos personalizados**	

No arquivo Tracker_js estão todos os scripts dos eventos personalizados que foram criados para fazer o acompanhamento do formulário. 

 - `startForm.js` -->  acompanha quem deu início ao formulário;
 - `formAbandonment.js`--> rastreia comportamentos de abandono do formulário;
 - `submitForm.js`  --> acompanha quem finalizou o formulário;
 - `timingField.js` --> indica o tempo gasto em cada pergunta;
 - `timingTotal.js` --> indica o tempo total que o usuário gastou para responder o formulário.

