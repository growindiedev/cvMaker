import React from 'react'
import styled from 'styled-components'
import Input from './common/Input'
import TextArea from './common/TextArea'
import { useFormContext } from "react-hook-form";

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  //border: 1px solid blue;
  margin-bottom: 2rem;
  /* padding-bottom: 3rem; */
  .title, .textArea {
    grid-column: 1/-1;
  }
`

const Personal = () => {
  const {register} =  useFormContext();
  return (
    <Wrapper>
      <h2 className='section-heading'>Personal Information</h2>
      <Input placeholder='First Name' {...register("firstName") }/>
      <Input placeholder='Last Name' {...register('lastName')}/>
      <Input placeholder='Title (e.g Backend Engineer)'className='title' {...register('jobTitle')}/>
      <Input placeholder='Email' {...register('email')}/>
      <Input placeholder='Phone' {...register('phone')}/>
      <Input placeholder='LinkedIn username' {...register('linkedin')}/>
      <Input placeholder='Github username' {...register('github')}/>
      <TextArea className='textArea' placeholder='describe yourself here' rows={3} {...register('personalDescription')}/>
    </Wrapper>
  )
}

export default Personal