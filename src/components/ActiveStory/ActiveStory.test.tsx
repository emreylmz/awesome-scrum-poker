import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import '../../testUtils/setupTests'
import { emptyTestFunc } from '../../testUtils/testUtils'
import { ActiveStory, ActiveStoryProps, PointButton } from './ActiveStory'

type DoneCallback = jest.DoneCallback

const getWrapper = (props?: ActiveStoryProps): ShallowWrapper => {
  return shallow(<ActiveStory selectPoint={emptyTestFunc} {...props} />)
}

describe('Active Story UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should render story points correctly', (done: DoneCallback): void => {
    const point = '13'
    const wrapper = getWrapper({ selectedPoint: point, selectPoint: emptyTestFunc })
    const voteComponent = wrapper.find('div.active-story__selected-point')
    expect(voteComponent.text()).toEqual(`${point} Voted`)
    done()
  })

  it('should show selected story points', (done: DoneCallback): void => {
    const wrapper = getWrapper({ selectPoint: emptyTestFunc })
    let voteComponent = wrapper.find('div.active-story__selected-point')
    expect(voteComponent.text()).toEqual('Please Vote!!!')
    const point = '13'
    wrapper.setProps({
      selectedPoint: point
    })
    voteComponent = wrapper.find('div.active-story__selected-point')
    expect(voteComponent.text()).toEqual(`${point} Voted`)
    done()
  })
})

describe('Active Story Logic', (): void => {
  it('should call onSelect method when a point selected', (done: DoneCallback): void => {
    const testPoint = '13'
    const testFunc = sinon.spy()
    const wrapper = getWrapper({ selectPoint: testFunc })
    const pointButtonWrapper = wrapper.find(PointButton).at(0)
    pointButtonWrapper.invoke('onClick')(testPoint)

    expect(testFunc.calledOnce).toBeTruthy()
    expect(testFunc.args[0][0]).toEqual(testPoint)
    done()
  })
})
