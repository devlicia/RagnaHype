import './styles.scss';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}; 

export function ButtonHeader({isOutlined = false, ...props} : ButtonProps) {
    return (
      <button className={`button ${isOutlined && 'isOutlined'}`}{...props}/>
    )
}