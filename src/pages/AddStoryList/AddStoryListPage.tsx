import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import Redux, { bindActionCreators } from 'redux'
import { Button, LabeledTextArea, LabeledTextBox } from '../../components'
import { Sprint } from '../../models'
import { startSession } from '../../redux/actions/sprintActions'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import './AddStoryListPage.scss'

interface StateProps {
  sprint?: Sprint
}

interface DispatchProps {
  startSession: (sprintName: string, numberOfVoters: number, stories: string[]) => void
}

type Props = StateProps & DispatchProps & RouteComponentProps

interface State {
  sprintName?: string
  numberOfVoters?: number
  storyList?: string[]
}

class AddStoryListPage extends React.Component<Props, State> {
  private sprintNameOnChange = (sprintName?: string): void => {
    this.setState({
      sprintName
    })
  }

  private numberOfVotersOnChange = (numberOfVoters?: string): void => {
    if (!numberOfVoters) {
      return
    }

    this.setState({
      numberOfVoters: +numberOfVoters
    })
  }

  private storyListOnChange = (storyList?: string): void => {
    this.setState({
      storyList: storyList?.split('\n').filter(s => s)
    })
  }

  private startSprintOnClick = async () => {
    const { sprintName, numberOfVoters, storyList } = this.state
    if (!sprintName || !numberOfVoters || !storyList) {
      return
    }

    await this.props.startSession(sprintName, numberOfVoters, storyList)
    this.props.history.push('/poker-planing-view-as-scrum-master')
  }

  render(): Render {
    return (
      <div className={'add-story-list-page'}>
        <div className={'add-story-list-page__inputs'}>
          <LabeledTextBox label={'Sprint Name'} characterLimit={200} onChange={this.sprintNameOnChange} />
          <LabeledTextBox label={'Number of voters'} numeric onChange={this.numberOfVotersOnChange} />
        </div>
        <div className={'add-story-list-page__text-area'}>
          <LabeledTextArea
            label={'Paste your story list (Each line will be converted as a story)'}
            onChange={this.storyListOnChange}
          />
        </div>
        <Button title={'Start Session'} onClick={this.startSprintOnClick} />
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
      startSession: startSession
    },
    dispatch
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStoryListPage))
