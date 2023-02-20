import './TextInput.css'

export const TextInput = (props) => {

    const handleInput = (event) => {
        props.changeInputValue(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label> {props.label} </label>
            <input 
              value={props.value}
              onChange={handleInput}
              required={props.required}
              type="text" 
              placeholder={props.placeholder}
            />
        </div>
    )
}
