import React from 'react'
import styled from 'styled-components'
import Personal from './Personal'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'


const Wrapper = styled.div`
  width: 80vw;
//  border: 1px solid green;
  justify-self: center;
  margin-bottom: 3rem;
`
const Form = () => {
  return (
    <Wrapper>
      <Personal/>
      <Skills/>
      <Experience/>
      <Education/>
    </Wrapper>
  )
}

export default Form;

