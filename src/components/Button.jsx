import styled from 'styled-components'

export const Button = styled.button`
  color: #0369a1;
  font-size: 1rem;
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background: 0 0;
  border: 2px solid #0369a1;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding: 8px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .14s ease-out;
  white-space: nowrap;
  &:hover {
      box-shadow: 4px 4px 0 #0369a1;
      transform: translate(-4px,-4px);
  }
  &:focus-visible {
      outline-offset: 1px;
  }
                
`