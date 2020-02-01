import React from 'react'
import { Render } from '../../types'

class Header extends React.PureComponent {
  render(): Render {
    return <h1 className={'title'}>Awesome Scrum Poker</h1>
  }
}

export default Header
