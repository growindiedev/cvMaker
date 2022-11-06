import React, {useState, useEffect} from 'react'
import { useFormContext } from 'react-hook-form'

import styled from 'styled-components'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'

const Wrapper = styled.form`
  margin-bottom: 2rem;

  .section-heading {
    margin-bottom: 1.5rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    .rmv-pos {
      justify-self: left;
      transform: scale(0.8);
    }

    .textArea {
      grid-column: 1/-1;
    }

}
`
const InnerForm = ({innerForm, setInnerForm, id}) => {
  const {register, unregister} =  useFormContext();

  const removeInnerForm = (e) => {
    e.preventDefault();
    unregister()
    setInnerForm(innerForm.filter((_, index) => {
      return id !== index
    }))
  }
  
  return (
  <div className='grid-container'>
    <Input placeholder='Title' {...register(`company-title-${id}`)}/>
    <Input placeholder='Company Name' {...register(`company-name-${id}`)}/>
    <Input placeholder='Start Date' {...register(`job-start-date-${id}`)}/>
    <Input placeholder='End Date' {...register(`job-end-date-${id}`)}/>
    <TextArea className='textArea' placeholder='description' rows={3} {...register(`job-description-${id}`)}/>
    <Button className='rmv-pos' onClick={removeInnerForm}>Remove Position</Button>
  </div>
)}

const Experience = () => {
  const [innerForm, setInnerForm] = useState([])

  const handleClick = (e) => {
    e && e.preventDefault()
    setInnerForm([...innerForm, InnerForm])
  }

  useEffect(() => handleClick, [])

  return (
    <Wrapper>
      <h2 className='section-heading'>Experience</h2>
      {
        innerForm.map((Form, i) => <Form key={i} id={i} innerForm={innerForm} setInnerForm={setInnerForm}/>)
      }
    <Button onClick={handleClick}>Add Position</Button>
    </Wrapper>
  )
}

export default Experience