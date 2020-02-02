import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import '../../testUtils/setupTests'
import { emptyTestFunc } from '../../testUtils/testUtils'
import Button, { ButtonProps } from './Button'

type DoneCallback = jest.DoneCallback

const defaultTitle = 'My Button'

const getWrapper = (props?: ButtonProps): ShallowWrapper => {
  return shallow(<Button title={defaultTitle} onClick={emptyTestFunc} {...props} />)
}

describe('Button UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should have title', (done: DoneCallback): void => {
    const title = 'Test Button'
    const wrapper = getWrapper({ title, onClick: emptyTestFunc })
    const titleWrapper = wrapper.find('.button__title')
    expect(titleWrapper.text()).toEqual(title)
    done()
  })

  it('should set title with props', (done: DoneCallback): void => {
    const title = 'Test Button'
    const wrapper = getWrapper()
    let titleWrapper = wrapper.find('.button__title')
    expect(titleWrapper.text()).toEqual(defaultTitle)
    wrapper.setProps({ title })
    titleWrapper = wrapper.find('.button__title')
    expect(titleWrapper.text()).toEqual(title)
    done()
  })

  it('should be able to disabled with props', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    let voteComponent = wrapper.find('.button')
    expect(voteComponent.hasClass('disabled')).toBeFalsy()
    wrapper.setProps({ disabled: true })
    voteComponent = wrapper.find('.button')
    expect(voteComponent.hasClass('disabled')).toBeTruthy()
    done()
  })
})

describe('Button Logic', () => {
  it('should call onClick method when clicked', (done: DoneCallback): void => {
    const testFunc = sinon.spy()
    const wrapper = getWrapper({ title: defaultTitle, onClick: testFunc })

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    wrapper.invoke('onClick')()

    expect(testFunc.calledOnce).toBeTruthy()
    done()
  })
})
