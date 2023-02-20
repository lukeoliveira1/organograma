import './FormSelect.css'

interface FormSelectProps {
  changeInputValue: (event : string) => void;
  required: boolean;
  label: string;
  value: string;
  itens: string[];
}

export const FormSelect = ({ changeInputValue, required, label, value, itens} : FormSelectProps) => {

  return(
    <div className={'floatList'}>

      <label>{label}</label>

      <select 
        onChange={event => changeInputValue(event.target.value)}
        required={required} 
        value={value}
      >
        <option value=""></option>
        {itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>

    </div>
  )
}

