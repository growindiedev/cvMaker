
import React, {useState, useEffect, useRef} from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'
import uniqid from 'uniqid';


const Wrapper = styled.form`
  margin-bottom: 2rem;
  .section-heading {
    margin-bottom: 1.5rem;
  }

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

const InnerForm = ({innerForm, setInnerForm, id, index}) => {


  const {register, unregister} =  useFormContext();
  const removeInnerForm = (e) => {
    e.preventDefault();
    unregister('education')
    setInnerForm(innerForm.filter((item) => {
      let {uid} = item
      return uid !== id;
    }))
  }
  
  return (
  <div className='grid-container'>
        <Input placeholder='Course/Degree' {...register(`education.${index}.degree`)}/>
        <Input placeholder='School' {...register(`education.${index}.school`)}/>
        <Input placeholder='Start Date' {...register(`education.${index}.startDate`)}/>
        <Input placeholder='End Date' {...register(`education.${index}.endDate`)}/>
        <TextArea className='textArea' placeholder='description' rows={3} {...register(`education.${index}.description`)}/>
        <Button onClick={(e) => removeInnerForm(e)} className='rmv-edu'>Remove Education</Button>
  </div>
)}

const Education = () => {
  const [innerForm, setInnerForm] = useState([])
  const {getValues} =  useFormContext();

  const handleClick = (e) => {
    e && e.preventDefault()
    setInnerForm([...innerForm, {InnerForm: InnerForm, uid: uniqid()}])
  }

  useEffect(() => {
      handleClick();
  }, [])

  return (
    <Wrapper>
      <h2 className='section-heading'>Education</h2>
      {
        innerForm.map((item, i) => {
        let {InnerForm, uid} = item;
        return <InnerForm key={uid} id={uid} innerForm={innerForm} setInnerForm={setInnerForm} index={i}/>
      })
      }
    <Button onClick={handleClick}>Add Education</Button>
    </Wrapper>
  )
}


export default Education