import React from 'react'
import { connect } from 'react-redux'
import Redux, { bindActionCreators } from 'redux'
import { Sprint } from '../../models'
import { selectPoint } from '../../redux/actions/storyActions'
import { RootState } from '../../redux/reducers'
import { Render } from '../../types'
import { classNames } from '../../utils'
import Button from '../Button/Button'
import './ActiveStory.scss'

const getStoryTitle = (sprint?: Sprint): string => {
  if (!sprint || !sprint.activeStory) {
    return ''
  }
  return sprint.activeStory.title
}

interface StateProps {
  selectedPoint?: string
  storyTitle?: string
}

interface DispatchProps {
  selectPoint: (point?: string) => void
}

type Props = StateProps & DispatchProps

interface State {
  selectedPoint: number
}

interface PointButtonProps {
  point: string
  isSelected: boolean
  onClick: (point: string) => void
}
export const PointButton: React.SFC<PointButtonProps> = ({ point, isSelected, onClick }: PointButtonProps) => {
  const className = classNames('point-button', isSelected ? 'selected' : undefined)
  return (
    <Button
      className={className}
      title={point}
      onClick={(): void => {
        onClick(point)
      }}
    />
  )
}

const points = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '134', '?']

export class ActiveStory extends React.PureComponent<Props, State> {
  render(): Render {
    const { selectedPoint, selectPoint, storyTitle } = this.props
    return (
      <div className={'active-story'}>
        <div className={'active-story__title'}>{'Active Story'}</div>
        <div className={'active-story__title'}>{storyTitle}</div>
        <div className={'active-story__points-container'}>
          {points.map((point, index) => (
            <PointButton key={index} point={point} isSelected={selectedPoint === point} onClick={selectPoint} />
          ))}
        </div>
        {selectedPoint ? (
          <div className={'active-story__selected-point'}>{`${selectedPoint} Voted`}</div>
        ) : (
          <div className={'active-story__selected-point'}>Please Vote!!!</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    selectedPoint: state.StoryReducer.selectedPoint,
    storyTitle: getStoryTitle(state.SprintReducer.sprint)
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      selectPoint: selectPoint
    },
    dispatch
  )
}

export type ActiveStoryProps = Props
export default connect(mapStateToProps, mapDispatchToProps)(ActiveStory)
