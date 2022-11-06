import React from 'react'
import { useFormContext } from "react-hook-form";


const Preview = () => {
  const {watch} =  useFormContext();

  return (
    <div>{watch('first-name')}</div>
  )
}

export default Preview