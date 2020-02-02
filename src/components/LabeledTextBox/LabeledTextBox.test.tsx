import { mount, shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import '../../testUtils/setupTests'
import LabeledTextBox, { LabeledTextBoxProps } from './LabeledTextBox'

type DoneCallback = jest.DoneCallback

const defaultProps: LabeledTextBoxProps = {
  label: 'Labeled Text Box'
}

const getWrapper = (props?: LabeledTextBoxProps): ShallowWrapper => {
  return shallow(<LabeledTextBox {...defaultProps} {...props} />)
}

describe('Labeled Text Box UI', () => {
  it('should render correctly', (done: DoneCallback) => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should change its value with props', (done: DoneCallback) => {
    const newValue = 'input value'
    const wrapper = getWrapper()
    let textBox = wrapper.find('input')

    expect(textBox.prop('value')).toBeUndefined()
    wrapper.setProps({
      value: newValue
    })
    textBox = wrapper.find('input')
    expect(textBox.prop('value')).toEqual(newValue)
    done()
  })

  it('should have a label', (done: DoneCallback) => {
    const wrapper = getWrapper()
    const labelWrapper = wrapper.find('.text-box__label')
    expect(labelWrapper).toBeDefined()
    expect(labelWrapper.text()).toEqual(defaultProps.label)
    done()
  })

  it('should change label title with props', (done: DoneCallback) => {
    const testLabel = 'Test Label'
    const wrapper = getWrapper()
    let labelWrapper = wrapper.find('.text-box__label')
    expect(labelWrapper.text()).toEqual(defaultProps.label)
    wrapper.setProps({ label: testLabel })
    labelWrapper = wrapper.find('.text-box__label')
    expect(labelWrapper.text()).toEqual(testLabel)
    done()
  })
})

describe('Labeled Text Box Logic', () => {
  it('should be able to limit character', () => {
    const characterLimit = 200
    const wrap = mount(<LabeledTextBox {...defaultProps} characterLimit={characterLimit} />)
    const textBox = wrap.find('input')
    const newValue = new Array(300).fill('a').join('')

    const limitedValue = newValue.slice(0, characterLimit)
    expect(textBox.prop('maxLength')).toEqual(characterLimit)
    // wrap.setProps({ value: newValue })
    //
    // textBox = wrap.find('input')
    // expect(textBox.prop('value')).toEqual(limitedValue)

    // TODO: find a solution for test max length
  })

  it('should call onChange method when its value change', () => {
    // const renderer = getDefaultRenderer()
    const newValue = 'NEW VALUE'
    const onChange = (value?: string | number): void => {
      expect(value).toEqual(newValue)
    }
    const wrap = mount(<LabeledTextBox {...defaultProps} onChange={onChange} />)
    // spyOn(wrap.prop())
  })
})
