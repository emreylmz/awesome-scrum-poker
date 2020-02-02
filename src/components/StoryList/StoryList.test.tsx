import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import { Story } from '../../models'

import '../../testUtils/setupTests'
import { StoryList, StoryListProps } from './StoryList'
import StoryListItem from './StoryListItem/StoryListItem'

type DoneCallback = jest.DoneCallback

const getWrapper = (props?: StoryListProps): ShallowWrapper => {
  return shallow(<StoryList {...props} />)
}

describe('Story List UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it("should have 'No Story' text when there is no story", (done: DoneCallback): void => {
    const wrapper = getWrapper()
    const labelWrapper = wrapper.find('.story-list__stories')
    expect(labelWrapper).toBeDefined()
    expect(labelWrapper.text()).toEqual('No Story')
    done()
  })

  it('should have as many StoryListItem as the number of stories that given with props', (done: DoneCallback): void => {
    const stories: Story[] = [
      {
        id: '1',
        title: 'Story 1',
        status: 1
      },
      {
        id: '2',
        title: 'Story 2',
        status: 0
      },
      {
        id: '3',
        title: 'Story 3',
        status: 0
      }
    ]
    const wrapper = getWrapper({ stories })
    const labelWrapper = wrapper.find(StoryListItem)
    expect(labelWrapper).toBeDefined()
    expect(labelWrapper.length).toEqual(stories.length)
    done()
  })
})
