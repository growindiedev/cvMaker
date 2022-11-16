import React from 'react'
import Input from './common/Input'
import Button from './common/Button'
import { useFormContext } from 'react-hook-form'


const Skill = ({innerForm, setInnerForm, id, parentId, index, parentIndex}) => {
  const {register, unregister} =  useFormContext();

  const removeInnerForm = (e) => {
    e.preventDefault();
    //unregister(`skills.${parentIndex}.skill`)
    unregister(`skill.${parentIndex}`)
    setInnerForm(innerForm.filter((item) => {
      let {uid} = item
      return uid !== id;
    }))
  }

  return (
    <div className='flex-container-sub'>
      <Input className="skill-category-skill" placeholder="skill" {...register(`skill.${parentIndex}.${index}`)}/>
      {/* <Input className="skill-category-skill" placeholder="skill" {...register(`skills.${parentIndex}.skill.${index}`)}/> */}
      <Button className='close-skill-category-skill' onClick={removeInnerForm}>X</Button>
    </div>
  )
}     

export default Skill