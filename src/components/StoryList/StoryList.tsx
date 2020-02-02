import React from 'react'
import { connect } from 'react-redux'
import { Story } from '../../models'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import './StoryList.scss'
import StoryListItem from './StoryListItem/StoryListItem'

interface StateProps {
  stories?: Story[]
}

type Props = StateProps

export class StoryList extends React.PureComponent<Props> {
  render(): Render {
    const { stories } = this.props
    return (
      <div className={'story-list'}>
        <div className={'story-list__header'}>
          <div className={'story-list__header-title'}>Story</div>
          <div className={'story-list__header-title'}>Story Point</div>
          <div className={'story-list__header-title'}>Status</div>
        </div>
        <div className={'story-list__stories'}>
          {stories ? stories.map(story => <StoryListItem key={story.id} {...story} />) : 'No Story'}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    stories: state.SprintReducer.sprint?.storyList
  }
}

export type StoryListProps = Props
export default connect(mapStateToProps)(StoryList)
