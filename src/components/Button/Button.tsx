import React from 'react'
import { Render } from '../../types'
import { classNames } from '../../utils'
import './Button.scss'

interface Props {
  className?: string
  title: string
  disabled?: boolean
  onClick: () => void
}

class Button extends React.PureComponent<Props> {
  render(): Render {
    const { className, title, disabled, onClick } = this.props

    const buttonClassName = classNames('button', disabled && 'disabled', className)
    return (
      <div className={buttonClassName} onClick={onClick}>
        <span className={'button__title'}>{title}</span>
      </div>
    )
  }
}

export type ButtonProps = Props
export default Button
