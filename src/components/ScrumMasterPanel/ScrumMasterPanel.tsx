import React from 'react'
import { connect } from 'react-redux'
import { Sprint, Voter } from '../../models'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import Button from '../Button/Button'
import LabeledTextBox from '../LabeledTextBox/LabeledTextBox'
import './ScrumMasterPanel.scss'

export enum VoteState {
  NotVoted,
  EveryOneVoted,
  AllSamePoint
}

const getStoryTitle = (sprint?: Sprint): string => {
  if (!sprint || !sprint.activeStory) {
    return ''
  }
  return sprint.activeStory.title
}

const getVoters = (sprint?: Sprint, selectedPoint?: string): Voter[] => {
  if (!sprint) {
    return []
  }
  const scrumMaster: Voter | undefined = sprint.voterList && sprint.voterList.find(voter => voter.isScrumMaster)
  if (!scrumMaster) {
    return []
  }

  // scrumMaster.point = selectedPoint

  return [...sprint.voterList]
}

const getVoteState = (sprint?: Sprint): VoteState => {
  if (!sprint) {
    return VoteState.NotVoted
  }

  const { voterList: voters } = sprint
  if (voters.some(voter => voter.point === undefined)) {
    return VoteState.NotVoted
  }
  const currentPoint = voters[0].point
  for (const voter of voters) {
    if (voter.point !== currentPoint) {
      return VoteState.EveryOneVoted
    }
  }
  return VoteState.AllSamePoint
}

interface OwnProps {
  onContinueClick: (finalScore: number) => void
}

interface StateProps {
  storyTitle: string
  voters: Voter[]
  voteState: VoteState
}

type Props = StateProps & OwnProps

interface State {
  finalScore?: string
}

export class ScrumMasterPanel extends React.PureComponent<Props, State> {
  private onContinueClick = (): void => {
    const { voters, voteState, onContinueClick } = this.props
    if (voteState === VoteState.NotVoted) {
      return
    }

    const { finalScore: point } = this.state
    if (!point || point === '?') {
      return
    }
    onContinueClick(+point)
  }

  private onFinalScoreChange = (value?: string): void => {
    this.setState({
      finalScore: value
    })
  }

  private renderVoter(voter: Voter): Render {
    return (
      <div key={voter.name} className={'voter-line'}>
        <span className={'voter-name'}>{voter.name}</span>
        <span className={'voter-point'}>{voter.point || (voter.voted ? 'Voted' : 'Not Voted')}</span>
      </div>
    )
  }

  render(): Render {
    const { storyTitle, voters, voteState } = this.props
    return (
      <div className={'scrum-master-panel'}>
        <div className={'scrum-master-panel__title'}>{`${storyTitle} is active`}</div>
        <div className={'voters-container'}>{voters.map(this.renderVoter)}</div>
        {voteState !== VoteState.NotVoted && (
          <LabeledTextBox label={'Final Score'} numeric onChange={this.onFinalScoreChange} />
        )}

        <Button
          title={`End Voting For ${storyTitle}`}
          disabled={voteState !== VoteState.AllSamePoint}
          onClick={this.onContinueClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    storyTitle: getStoryTitle(state.SprintReducer.sprint),
    voters: getVoters(state.SprintReducer.sprint, state.StoryReducer.selectedPoint),
    voteState: getVoteState(state.SprintReducer.sprint)
  }
}

export type ScrumMasterPanelProps = Props
export default connect(mapStateToProps)(ScrumMasterPanel)
