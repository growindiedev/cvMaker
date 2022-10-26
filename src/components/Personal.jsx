import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import TextArea from './TextArea'

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  //border: 1px solid blue;
  margin-bottom: 3rem;
  .title, .textArea {
    grid-column: 1/-1;
  }
`

const Personal = () => {
  return (
    <Wrapper>
      <h2 className='section-heading'>Personal Information</h2>
      <Input placeholder='First Name'/>
      <Input placeholder='Last Name'/>
      <Input placeholder='Title (e.g Backend Engineer)' className='title'/>
      <Input placeholder='Email'/>
      <Input placeholder='Phone'/>
      <Input placeholder='LinkedIn username'/>
      <Input placeholder='Github username'/>
      <TextArea className='textArea' placeholder='describe yourself here' rows={3}/>
    </Wrapper>
  )
}

export default Personal