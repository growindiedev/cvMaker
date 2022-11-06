import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './components/common/Button'
import Form from './components/Form'
import Preview from './components/Preview'
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

  const [isEditMode, setIsEditMode] = useState(true)
  const methods = useForm();

  const handleMode = (e) => {
    e.preventDefault()
    setIsEditMode(!isEditMode)
    console.log('values', methods.getValues())
  }

  const autofill = {
    //personal
    "first-name": "Naval",
    "last-name": "Ravikant",
    "job-title": "Founder Angel.co",
    "email": "naval@angel.co",
    "phone": "+0897979797",
    "linkedin": "https://www.linkedin.com/in/navalr",
    "github": "naval",
    "personal-description": "Naval Ravikant is an Indian-American entrepreneur and investor. He is the co-founder, chairman and former CEO of AngelList. He has invested early-stage in over 200 companies including Uber, FourSquare, Twitter, Wish.com, Poshmark, Postmates, Thumbtack, Notion, SnapLogic, Opendoor, Clubhouse, Stack Overflow, Bolt, OpenDNS, Yammer, and Clearview AI, with over 70 total exits and more than 10 Unicorn companies",
    //experience 
    "position-title-0": "CEO",
    "company-name-0": "Angellist LLP",
    "job-start-date-0": 2010,
    "job-description-0": "Changing the way startups fund themselves",
    //education
    "course-degree-0": "BA Computer Science",
    "school-0": "MIT, Boston",
    "course-description-0": "Learnt how to code and built software that scales",
    "course-start-date-0": "Jan 1994",
    "course-end-date-0": "Jan 1998",
    //skills
    "skill-category-0": "Programming",
    "skill-00": "gucci"
  }

  return (
    <Wrapper>
      <Header>CV Generator</Header>
      <FormProvider {...methods}>
        {
          isEditMode ? (<BtnContainer>
            <Button onClick={handleMode}>Preview Mode</Button>
            <Button onClick={() => methods.reset(autofill, {keepDefaultValues: true})}>Auto Fill</Button>
            <Button onClick={() => methods.reset()}>Reset</Button>
          </BtnContainer>) :
          (<BtnContainer>
            <Button onClick={handleMode}>Edit Mode</Button>
          </BtnContainer>)
        }
        {
          isEditMode ?  <Form/> : <Preview/>
        }
      </FormProvider>
    </Wrapper>
  );
}

export default App;
