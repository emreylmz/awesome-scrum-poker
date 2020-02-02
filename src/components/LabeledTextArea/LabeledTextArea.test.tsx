import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import '../../testUtils/setupTests'
import LabeledTextArea, { LabeledTextAreaProps } from './LabeledTextArea'

type DoneCallback = jest.DoneCallback

const defaultProps: LabeledTextAreaProps = {
  label: 'My Text Area'
}

const getWrapper = (props?: LabeledTextAreaProps): ShallowWrapper => {
  return shallow(<LabeledTextArea {...defaultProps} {...props} />)
}
describe('Labeled Text Area UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should have a label', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    const labelWrapper = wrapper.find('.labeled-text-area__label')
    expect(labelWrapper).toBeDefined()
    expect(labelWrapper.text()).toEqual(defaultProps.label)
    done()
  })

  it('should change label title with props', (done: DoneCallback): void => {
    const testLabel = 'Test Label'
    const wrapper = getWrapper()
    let labelWrapper = wrapper.find('.labeled-text-area__label')
    expect(labelWrapper.text()).toEqual(defaultProps.label)
    wrapper.setProps({ label: testLabel })
    labelWrapper = wrapper.find('.labeled-text-area__label')
    expect(labelWrapper.text()).toEqual(testLabel)
    done()
  })
})

describe('Labeled Text Area Logic', (): void => {
  it('should call onChange method when its value changed', (done: DoneCallback): void => {
    const testFunc = sinon.spy()
    const testValue = 'Test Value'
    const wrapper = getWrapper({ ...defaultProps, onChange: testFunc })
    const labelWrapper = wrapper.find('textarea')

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    labelWrapper.invoke('onChange')({ target: { value: testValue } })
    expect(testFunc.calledOnce).toBeTruthy()
    expect(testFunc.args[0][0]).toEqual(testValue)
    done()
  })
})
