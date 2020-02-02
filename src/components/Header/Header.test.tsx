import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import '../../testUtils/setupTests'
import Header, { HeaderProps } from './Header'

type DoneCallback = jest.DoneCallback

const defaultTitle = 'My Header'

const getWrapper = (props?: HeaderProps): ShallowWrapper => {
  return shallow(<Header title={defaultTitle} {...props} />)
}

describe('Header UI', () => {
  it('should render correctly', (done: DoneCallback) => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should have title', (done: DoneCallback) => {
    const wrapper = getWrapper()
    const titleWrapper = wrapper.find('.header__title')
    expect(titleWrapper.text()).toEqual(defaultTitle)
    done()
  })
})
