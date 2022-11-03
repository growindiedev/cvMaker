import React from 'react'
import styled from 'styled-components'
import Button from './components/common/Button'
import Form from './components/Form'
import {useForm, FormProvider} from 'react-hook-form'


const Wrapper = styled.div`
  display: grid;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0369a1;
  color: white;
  font-size: 3rem;
  height: 10vh;
`

const BtnContainer =  styled.div`
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`


function App() {
  const methods = useForm();

  return (
    <Wrapper>
      <Header>CV Generator</Header>
      <BtnContainer>
        <Button>Preview Mode</Button>
        <Button>Auto Fill</Button>
        <Button>Reset</Button>
      </BtnContainer>
      <FormProvider {...methods}>
      <Form/>
      </FormProvider>
    </Wrapper>
  );
}

export default App;
