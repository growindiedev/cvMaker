import React from 'react'
import Input from './common/Input'
import Button from './common/Button'
import { useFormContext } from 'react-hook-form'


const Skill = ({innerForm, setInnerForm, id, parentId}) => {
  const {register} =  useFormContext();

  const removeInnerForm = (e) => {
    e.preventDefault();
    setInnerForm(innerForm.filter((item) => {
      let {uid} = item
      return uid !== id;
    }))
  }

  return (
    <div className='flex-container-sub'>
      <Input className="skill-category-skill" placeholder="skill" {...register(`skill.${parentId}.${id}`)}/>
      <Button className='close-skill-category-skill' onClick={removeInnerForm}>X</Button>
    </div>
  )
}     

export default Skill