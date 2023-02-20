import { ICollaborator } from '../../types/ICollaborator';

import { Collaborator } from '../Collaborator'

import './Team.css'

interface TeamProps {
  primaryColor: string;
  secondaryColor: string;
  nameTeam: string;
  collaborators: ICollaborator[];
}

export const Team = ({ primaryColor, secondaryColor, nameTeam, collaborators }: TeamProps) => {

  return(
    (collaborators.length > 0 ? 
      <section className='team' style={{ backgroundColor: secondaryColor }}>
        <h3 style={{borderColor: primaryColor}}>{nameTeam}</h3>
        <div className='collaborators'>
          {collaborators.map((collaborator, index) => {
            return <Collaborator 
                    key={index} 
                    name={collaborator.name}
                    role={collaborator.role} 
                    image={collaborator.image}
                    backgroundColor={primaryColor}
                  />
          })}
        </div>
      </section>
      : <></>
    ) 
  )
}