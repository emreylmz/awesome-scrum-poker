import React from 'react'
import { Render } from '../../types'
import './Header.scss'

interface Props {
  title: string
}

class Header extends React.PureComponent<Props> {
  render(): Render {
    const { title } = this.props
    return (
      <div className={'header'}>
        <h1 className={'header__title'}>{title}</h1>
      </div>
    )
  }
}

export type HeaderProps = Props
export default Header
