import { Collaborator } from '../Collaborator'
import './Team.css'
export const Team = (props) => {

  return(
    (props.collaborators.length > 0 &&
      <section className='team' style={{ backgroundColor: props.secondaryColor }}>
        <h3 style={{borderColor: props.primaryColor}}>{props.nameTeam}</h3>
        <div className='collaborators'>
          {props.collaborators.map((collaborator, index) => {
            return <Collaborator 
                    key={index} 
                    name={collaborator.name}
                    role={collaborator.role} 
                    image={collaborator.image}
                    backgroundColor={props.primaryColor}
                  />
          })}
        </div>
      </section>
    )
  )
}