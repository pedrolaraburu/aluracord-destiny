import { Box, Button, Text, TextField, Image, Icon} from '@skynexui/components';
import React from 'react';
import { SiGithub } from 'react-icons/si';
import {useRouter} from 'next/router';
import appConfig from "../config.json";

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return  (
        <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
        ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-weight: 600;
            font-size: 24px;
        }
        `}</style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//         <GlobalStyle />
//         <Titulo tag="h2">Boas vindas de volta!</Titulo>
//         <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
//   }
  
//   export default HomePage

export default function PaginaInicial() {
    // const username = 'pedrolaraburu';
    const [username, setUsername] = React.useState('pedrolaraburu');
    const roteamento = useRouter();
    const [location, setLocation] = React.useState('Brasília, DF');
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.imgur.com/FZsCS0j.jpeg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: '',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
                console.log("Alguém submeteu o form");
                roteamento.push('/chat'); //Quando clicar no botão de entrar vai mudar a página para a página de chat
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Bem-vindo(a) ao servidor, {username}!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
              
              <TextField
                placeholder="Digite seu usuário do GitHub"
                value = {username}
                onChange={event =>{
                  setUsername(event.target.value);
                  fetch(`https://api.github.com/users/${username}`)
                    .then(response => response.json())
                    .then(data => {setLocation(data.location)})
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={username.length > 2 ?`https://github.com/${username}.png` : "https://github.com/error.png"}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px', 
                  margin: '5px 0'
                }}
              >
                <SiGithub/>&nbsp;{username}
              </Text>
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px', 
                  margin: '5px 0'
                }}
              >
                {location}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }