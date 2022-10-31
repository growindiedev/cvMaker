
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

    .rmv-edu {
      justify-self: left;
      transform: scale(0.8);
    }

    .textArea {
      grid-column: 1/-1;
    }
}
`

const Education = () => {
  return (
    <Wrapper>
      <div className='grid-container'>
      <h2 className='section-heading'>Education</h2>
      <Input placeholder='Area'/>
      <Input placeholder='School'/>
      <Input placeholder='Start Date' className='title'/>
      <Input placeholder='End Date'/>
      <TextArea className='textArea' placeholder='description' rows={3}/>
      <Button className='rmv-edu'>Remove Education</Button>
      </div>
    <Button>Add Education</Button>
    </Wrapper>
  )
}


export default Education