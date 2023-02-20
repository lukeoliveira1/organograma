import { useState } from 'react'

import { FormSelect } from '../FormSelect'
import { FormButton } from '../FormButton'
import { TextInput } from '../TextInput'

import './MemberForm.css'
import { ICollaborator } from '../../types/ICollaborator'

interface MemberFormProps {
  registeredCollaborator: (collaborator : ICollaborator) => void;
  teams: string[];
}

export const MemberForm = (props : MemberFormProps) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleForm = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.registeredCollaborator({
            name, 
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return(
        <section className="formulario">
            <form onSubmit={event => handleForm(event)}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput 
                  required={true} 
                  label="Nome" 
                  placeholder="Digite seu nome"
                  value={name}
                  changeInputValue={value => setName(value)}
                />
                <TextInput 
                  required={true} 
                  label="Cargo" 
                  placeholder="Digite seu cargo"
                  value={role}
                  changeInputValue={value => setRole(value)}
                />
                <TextInput 
                  label="Imagem" 
                  placeholder="Digite o endereço da imagem"
                  value={image}
                  changeInputValue={value => setImage(value)}
                />
                <FormSelect 
                  required={true} 
                  label="Time" 
                  itens={props.teams}
                  value={team}
                  changeInputValue={value => setTeam(value)}
                />
                <FormButton> 
                    Criar card 
                </FormButton>
            </form>
        </section>
    )
} 