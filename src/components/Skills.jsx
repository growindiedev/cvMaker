import React, {useState} from 'react'
import styled from 'styled-components'
import Input from './common/Input'
import Button from './common/Button'
import SkillCategory from './SkillCategory'

const Wrapper = styled.form`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem; */
  //border: 1px solid blue;
  margin-bottom: 1.5rem;
  * {
    margin: 0.5rem 0;
  }

`
const Skills = () => {

  const [state, setState] = useState([])

  const handleClick = () => {

  }



  return (
    <Wrapper>
      <h2 className='section-heading'>Skills</h2>
      <SkillCategory/>
      <Button onClick={e => console.log('clicked')}>Add Skill Category</Button>
    </Wrapper>
  )
}

export default Skills