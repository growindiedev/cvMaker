import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './common/Button'
import Input from './common/Input'
import Skill from './Skill'
import { useFormContext } from 'react-hook-form'


const Wrap = styled.div`

  margin-bottom: 1.5rem;
  * {
    margin: 0.5rem 0;
  }

`
const Wrapper = styled.form`
  .flex-conatiner {
    display: flex;
    gap: 1rem;
    .skill-category {
      flex: auto;
    }
  }

  .flex-container-sub {
    display: flex;
    gap: 1rem;

    .skill-category-skill {
      flex: auto;
    }
  }

  .add-skill, .flex-container-sub{
    transform: scale(0.9);
  }

`

const SkillCategory = ({skillForm, setSkillForm, id}) => {
  const {register} =  useFormContext();
  const [innerForm, setInnerForm] = useState([])

  const handleClick = (e) => {
    e && e.preventDefault()
    setInnerForm([...innerForm, Skill])
  }

  useEffect(() => handleClick, [])


  const removeSkillCategory = (e) => {
    e.preventDefault();
    setSkillForm(skillForm.filter((_, index) => {
      return id !== index
    }))

  }
  
  return (
    <Wrapper>
      <div className='flex-conatiner'>
      <Input className="skill-category" placeholder="Skill category" {...register(`skillCategory.${id}`)}/>
      <Button className='close-skill-category' onClick={removeSkillCategory}>X</Button>
      </div>
      {
          innerForm.map((Form, i) => <Form key={i} id={i} parentId={id} innerForm={innerForm} setInnerForm={setInnerForm}/>)
      }
    <Button className='add-skill' onClick={handleClick}>Add Skill</Button>
    </Wrapper>
  )
}

const Skills = () => {

  const [skillForm, setSkillForm] = useState([])

  const handleClick = (e) => {
    e && e.preventDefault()
    setSkillForm([...skillForm, SkillCategory])
  }

  useEffect(() => handleClick, [])


  return (
    <Wrap>
      <h2 className='section-heading'>Skills</h2>
      {
        skillForm.map((SkillForm, i) => <SkillForm key={i} skillForm={skillForm} setSkillForm={setSkillForm} id={i}/>)
      }
      <Button onClick={handleClick}>Add Skill Category</Button>
    </Wrap>
  )
}

export default Skills