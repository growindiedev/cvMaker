import React, {useState} from 'react'
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
  const {register} =  useFormContext();

  const removeInnerForm = (e) => {
    e.preventDefault();
    setInnerForm(innerForm.filter((_, index) => {
      return id !== index
    }))
  }
  
  return (
  <div className='grid-container'>
    <Input placeholder='Title' {...register('position-title')}/>
    <Input placeholder='Company Name' {...register('company-name')}/>
    <Input placeholder='Start Date' {...register('job-start-date')}/>
    <Input placeholder='End Date' {...register('job-end-date')}/>
    <TextArea className='textArea' placeholder='description' rows={3} {...register('job-description')}/>
    <Button className='rmv-pos' onClick={removeInnerForm}>Remove Position</Button>
  </div>
)}

const Experience = () => {
  const [innerForm, setInnerForm] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setInnerForm([...innerForm, InnerForm])
  }

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