import React from 'react'
import styled from 'styled-components'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'

const Wrapper = styled.form`
  margin-bottom: 2rem;
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

const Experience = () => {
  return (
    <Wrapper>
      <div className='grid-container'>
      <h2 className='section-heading'>Experience</h2>
      <Input placeholder='Title'/>
      <Input placeholder='Company Name'/>
      <Input placeholder='Start Date' className='title'/>
      <Input placeholder='End Date'/>
      <TextArea className='textArea' placeholder='description' rows={3}/>
      <Button className='rmv-pos'>Remove Position</Button>
      </div>
    <Button>Add Position</Button>
    </Wrapper>
  )
}

export default Experience