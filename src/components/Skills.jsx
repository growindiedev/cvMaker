import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './common/Button'
import SkillCategory from './SkillCategory'

const Wrapper = styled.div`

  margin-bottom: 1.5rem;
  * {
    margin: 0.5rem 0;
  }

`
const Skills = () => {

  const [skillForm, setSkillForm] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setSkillForm([...skillForm, SkillCategory])
  }

  return (
    <Wrapper>
      <h2 className='section-heading'>Skills</h2>
      {
        skillForm.map((SkillForm, i) => <SkillForm key={i} skillForm={skillForm} setSkillForm={setSkillForm} id={i}/>)
      }
      <Button onClick={handleClick}>Add Skill Category</Button>
    </Wrapper>
  )
}

export default Skills