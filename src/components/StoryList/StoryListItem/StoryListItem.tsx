import React from 'react'
import { Render } from '../../../types'
import { classNames } from '../../../utils'
import './StoryListItem.scss'

interface Props {
  title: string
  point?: number
  status: number
  isOdd?: boolean
}

class StoryListItem extends React.PureComponent<Props> {
  getStatusName(status: number): string {
    switch (status) {
      case 0:
        return 'Not Voted'
      case 1:
        return 'Active'
      case 2:
        return 'Voted'
      default:
        return ''
    }
  }
  render(): Render {
    const { title, point, status, isOdd } = this.props
    const className = classNames('story-list-item', isOdd && 'light-background')
    return (
      <div className={className}>
        <div className={'story-list-item__name'}>{title}</div>
        <div className={'story-list-item__point'}>{point}</div>
        <div className={'story-list-item__status'}>{this.getStatusName(status)}</div>
      </div>
    )
  }
}

export type StoryListItemProps = Props
export default StoryListItem
