import React, {useState, useEffect} from 'react'
import Input from './common/Input'
import styled from 'styled-components'
import Button from './common/Button'
import { useFormContext } from 'react-hook-form'


const Skill = ({innerForm, setInnerForm, cid, id}) => {
  const {register} =  useFormContext();

  const removeInnerForm = (e) => {
    e.preventDefault();
    setInnerForm(innerForm.filter((_, index) => {
      return id !== index
    }))
  }

  return (
    <div className='flex-container-sub'>
      <Input className="skill-category-skill" placeholder={cid} {...register(`skill-${cid}`)}/>
      <Button className='close-skill-category-skill' onClick={removeInnerForm}>X</Button>
    </div>
  )
}     




export default Skill