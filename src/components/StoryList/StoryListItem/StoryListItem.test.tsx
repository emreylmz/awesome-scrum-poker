import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import '../../../testUtils/setupTests'
import StoryListItem, { StoryListItemProps } from './StoryListItem'

type DoneCallback = jest.DoneCallback

const defaultProps: StoryListItemProps = {
  title: 'Default Story',
  status: 0
}

const getWrapper = (props?: StoryListItemProps): ShallowWrapper => {
  return shallow(<StoryListItem {...defaultProps} {...props} />)
}

describe('Story List Item UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should change story name with props', (done: DoneCallback): void => {
    done()
  })

  it('should change story active status with props', (done: DoneCallback): void => {
    done()
  })

  it('should change story point with props', (done: DoneCallback): void => {
    done()
  })
})
