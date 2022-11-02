import React, {useState} from 'react'
import Input from './common/Input'
import styled from 'styled-components'
import Button from './common/Button'


const Wrapper = styled.form`
  .flex-conatiner {
    display: flex;
    gap: 1rem;
    .skill-category-skill {
      flex: auto;
    }
  }

  .flex-container-sub {
    display: flex;
    gap: 1rem;

    .skill-category {
      flex: auto;
    }
  }

  .add-skill, .flex-container-sub{
    transform: scale(0.9);
  }

`


const Skill = ({innerForm, setInnerForm, id}) => {

  const removeInnerForm = (e) => {
    e.preventDefault();
    setInnerForm(innerForm.filter((_, index) => {
      return id !== index
    }))
  }

  return (
    <div className='flex-container-sub'>
      <Input className="skill-category" placeholder='skill'/>
      <Button className='close-skill-category' onClick={removeInnerForm}>X</Button>
    </div>
  )
}


const SkillCategory = ({skillForm, setSkillForm, id}) => {

  const [innerForm, setInnerForm] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setInnerForm([...innerForm, Skill])
  }

  const removeSkillCategory = (e) => {
    e.preventDefault();
    setSkillForm(skillForm.filter((_, index) => {
      return id !== index
    }))

  }
  
  return (
    <Wrapper>
      <div className='flex-conatiner'>
      <Input className="skill-category-skill" placeholder='skill category'/>
      <Button className='close-skill-category-skill' onClick={removeSkillCategory}>X</Button>
      </div>

      {
          innerForm.map((Form, i) => <Form key={i} id={i} innerForm={innerForm} setInnerForm={setInnerForm}/>)
      }
    <Button className='add-skill' onClick={handleClick}>Add Skill</Button>
    </Wrapper>
  )
}

export default SkillCategory