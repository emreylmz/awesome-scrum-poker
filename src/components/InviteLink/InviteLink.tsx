import React from 'react'
import { Render } from '../../types'
import './InviteLink.scss'

interface Props {
  link: string
}

class InviteLink extends React.PureComponent<Props> {
  render(): Render {
    const { link } = this.props
    const url = `${window.location.origin}${link}`
    return (
      <div className={'invite-link'}>
        <span className={'invite-link__info'}>Please share link of developers panel to the teammates</span>
        <div className={'invite-link__url'}>{url}</div>
      </div>
    )
  }
}

export type InviteLinkProps = Props
export default InviteLink
