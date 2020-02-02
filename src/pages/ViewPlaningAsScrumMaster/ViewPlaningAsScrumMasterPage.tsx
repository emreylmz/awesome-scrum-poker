import React from 'react'
import { connect } from 'react-redux'
import Redux, { bindActionCreators } from 'redux'
import { ActiveStory, InviteLink, ScrumMasterPanel, StoryList } from '../../components'
import { Sprint } from '../../models'
import { getSession } from '../../redux/actions/sprintActions'
import { endVoting } from '../../redux/actions/storyActions'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import './ViewPlaningAsScrumMasterPage.scss'

interface StateProps {
  sprint?: Sprint
}

interface DispatchProps {
  getSession: () => void
  endVoting: (storyId: string, point: number) => void
}

type Props = StateProps & DispatchProps

class ViewPlaningAsScrumMasterPage extends React.Component<Props> {
  private _interval?: NodeJS.Timeout

  componentDidMount(): void {
    this._interval = setInterval(() => {
      this.props.getSession()
    }, 2000)
  }

  componentWillUnmount(): void {
    if (this._interval) {
      clearInterval(this._interval)
    }
  }

  private onContinueClick = (finalScore: number): void => {
    console.log('Final Score', finalScore)
    const { sprint } = this.props
    if (!sprint || !sprint.activeStory) {
      alert('There is no active story!')
      return
    }
    this.props.endVoting(sprint.activeStory.id, finalScore)
  }

  render(): Render {
    const { sprint } = this.props

    if (!sprint) {
      return <div>Loading...</div>
    }

    const isScrumMaster = sprint.voterList?.some(voter => voter.isScrumMaster === true)
    return (
      <div className={'scrum-master-page'}>
        <div className={'invite-link-container'}>
          {sprint && <InviteLink link={`/poker-planing-view-as-developer/${sprint.id}`} />}
        </div>
        <div className={'scrum-master-page__container'}>
          <StoryList />
          <ActiveStory />
          {isScrumMaster && <ScrumMasterPanel onContinueClick={this.onContinueClick} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    sprint: state.SprintReducer.sprint
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      getSession: getSession,
      endVoting: endVoting
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlaningAsScrumMasterPage)
