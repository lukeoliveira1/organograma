import { ReactElement } from 'react'

import './FormButton.css'

interface FormButtonProps {
  children: ReactElement | string;
}

export const FormButton = (props : FormButtonProps) => {
  return(
    <button className='FormButton'>
      {props.children}
    </button>
  )
}