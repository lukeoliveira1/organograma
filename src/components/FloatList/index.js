import './FloatList.css'

export const FloatList = (props) => {

  return(
    <div className={'floatList'}>

      <label>{props.label}</label>

      <select 
        onChange={event => props.changeInputValue(event.target.value)}
        required={props.required} 
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>

    </div>
  )
}

