import './Collaborator.css'

export const Collaborator = ({ image, name, role, backgroundColor }) => {
  return(
    <div className='collaborator'>

      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>

      <div className='footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>

    </div>
  )
}