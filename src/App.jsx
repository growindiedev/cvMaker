import styled from 'styled-components'
import Button from './components/Button'
import Form from './components/Form'

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
  return (
    <Wrapper>
      <Header>CV Generator</Header>
      <BtnContainer>
        <Button>Preview Mode</Button>
        <Button>Auto Fill</Button>
        <Button>Reset</Button>
      </BtnContainer>
      <Form/>
    </Wrapper>
  );
}


export default App;
