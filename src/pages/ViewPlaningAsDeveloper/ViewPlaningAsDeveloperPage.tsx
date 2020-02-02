import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import Redux, { bindActionCreators } from 'redux'
import { ActiveStory, StoryList } from '../../components'
import { Sprint } from '../../models'
import { getSession } from '../../redux/actions/sprintActions'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import { constants } from '../../utils'
import './ViewPlaningAsDeveloperPage.scss'

interface StateProps {
  sprint?: Sprint
}

interface DispatchProps {
  getSession: () => void
}

type Props = StateProps & DispatchProps & RouteComponentProps

class ViewPlaningAsDeveloperPage extends React.Component<Props> {
  private _interval?: NodeJS.Timeout
  componentDidMount(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { sprintId } = this.props.match.params as any
    window.localStorage.setItem(constants.SPRINT_ID_KEY, sprintId)

    this._interval = setInterval(() => {
      this.props.getSession()
    }, 2000)
  }

  componentWillUnmount(): void {
    if (this._interval) {
      clearInterval(this._interval)
    }
  }

  render(): Render {
    const { sprint } = this.props

    if (!sprint) {
      return <div>Loading...</div>
    }
    return (
      <div className={'developer-page'}>
        <StoryList />
        <ActiveStory />
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
      getSession: getSession
    },
    dispatch
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPlaningAsDeveloperPage))
