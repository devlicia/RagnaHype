import './styles.scss';

type InputProps = { 
  type: string;
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <input type={props.type} placeholder={props.placeholder}/>
  )
}