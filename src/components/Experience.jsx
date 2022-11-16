import React, {useState, useEffect} from 'react'
import { useFormContext } from 'react-hook-form'
import uniqid from 'uniqid';
import styled from 'styled-components'
import Input from './common/Input'
import Button from './common/Button'
import TextArea from './common/TextArea'

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

    .rmv-pos {
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
    e && e.preventDefault();
    unregister('experience')
    setInnerForm(innerForm.filter((item) => {
      let {uid} = item
      return uid !== id;
    }))
  }

  
  return (
  <div className='grid-container'>
    <Input placeholder='Title' {...register(`experience.${index}.title`)}/>
    <Input placeholder='Company Name' {...register(`experience.${index}.companyName`)}/>
    <Input placeholder='Start Date' {...register(`experience.${index}.startDate`)}/>
    <Input placeholder='End Date' {...register(`experience.${index}.endDate`)}/>
    <TextArea className='textArea' placeholder='description' rows={3} {...register(`experience.${index}.description`)}/>
    <Button className='rmv-pos' onClick={removeInnerForm}>Remove Position</Button>
  </div>
)}

const Experience = () => {
  const [innerForm, setInnerForm] = useState([])

  const handleClick = (e) => {
    e && e.preventDefault()
    setInnerForm([...innerForm, {InnerForm: InnerForm, uid: uniqid()}])
  }

 useEffect(() => handleClick, [])

  return (
    <Wrapper>
      <h2 className='section-heading'>Experience</h2>
      {
        innerForm.map((item, i) => {
          let {InnerForm, uid} = item;
          return <InnerForm key={uid} id={uid} innerForm={innerForm} setInnerForm={setInnerForm} index={i}/>
        }
        )
      }
    <Button onClick={handleClick}>Add Position</Button>
    </Wrapper>
  )
}

export default Experience