import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import { Voter } from '../../models'
import '../../testUtils/setupTests'
import { emptyTestFunc } from '../../testUtils/testUtils'
import { ScrumMasterPanel, ScrumMasterPanelProps, VoteState } from './ScrumMasterPanel'

type DoneCallback = jest.DoneCallback

const defaultProps: ScrumMasterPanelProps = {
  onContinueClick: emptyTestFunc,
  storyTitle: 'Test Story',
  voters: [],
  voteState: VoteState.NotVoted
}

const getWrapper = (props?: ScrumMasterPanelProps): ShallowWrapper => {
  return shallow(<ScrumMasterPanel {...defaultProps} {...props} />)
}

describe('Scrum Master Panel UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should render voters and points correctly', (done: DoneCallback): void => {
    const voters: Voter[] = [
      {
        id: '1',
        point: '1',
        name: 'Voter 1',
        orderInSprint: 0
      },
      {
        id: '2',
        point: '1',
        name: 'Voter 2',
        orderInSprint: 1
      },
      {
        id: '3',
        point: '1',
        name: 'Voter 3',
        orderInSprint: 2,
        isScrumMaster: true
      }
    ]
    const wrapper = getWrapper({ ...defaultProps, voters })

    const voterWrappers = wrapper.find('.voter-line')
    voterWrappers.map((voterWrapper, index) => {
      const voter = voters[index]
      const voterName = voterWrapper.find('.voter-name')
      const voterPoint = voterWrapper.find('.voter-point')
      expect(voterName.text()).toEqual(voter.name)
      expect(voterPoint.text()).toEqual(voter.point)
    })
    done()
  })

  it('should show scrum master point when the scrum master point given', (done: DoneCallback): void => {
    done()
  })

  it('should show error message when End Voting button clicked if final score not entered', (done: DoneCallback): void => {
    done()
  })

  it('should update voters and points', (done: DoneCallback): void => {
    done()
  })

  it('should not display final score input till each teammate voted', (done: DoneCallback): void => {
    done()
  })
})

describe('Scrum Master Panel Logic', (): void => {
  it('should not call onContinue method when End voting button clicked if final score not entered', (done: DoneCallback): void => {
    done()
  })

  it('should not end voting till each teammate voted', (done: DoneCallback): void => {
    done()
  })
})
