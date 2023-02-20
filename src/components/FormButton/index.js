import './FormButton.css'

export const FormButton = (props) => {
  return(
    <button className='FormButton'>
      {props.children}
    </button>
  )
}