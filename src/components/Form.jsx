import React from 'react'
import styled from 'styled-components'
import Personal from './Personal'

const Wrapper = styled.div`
  width: 80vw;
  height: 100vw;
  //border: 1px solid green;
  justify-self: center;
  margin-bottom: 3rem;
`
const Form = () => {
  return (
    <Wrapper>
      <Personal/>
    </Wrapper>
  )
}

export default Form;

