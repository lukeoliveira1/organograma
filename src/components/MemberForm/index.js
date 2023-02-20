import { useState } from 'react'

import { FloatList } from '../FloatList'
import { FormButton } from '../FormButton'
import { TextInput } from '../TextInput'

import './MemberForm.css'

export const MemberForm = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleForm = (event) => {
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
            <form onSubmit={handleForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput 
                  required={true} 
                  label="Nome" 
                  placeholder="Digite seu nome"
                  value={name}
                  changeInputValue={value => setName(value)}
                />
                <TextInput 
                  label="Cargo" 
                  placeholder="Digite seu cargo"
                  value={role}
                  changeInputValue={value => setRole(value)}
                />
                <TextInput 
                  required={true} 
                  label="Imagem" 
                  placeholder="Digite o endereço da imagem"
                  value={image}
                  changeInputValue={value => setImage(value)}
                />
                <FloatList 
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