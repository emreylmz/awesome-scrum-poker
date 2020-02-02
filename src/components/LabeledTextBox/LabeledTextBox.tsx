import React from 'react'
import { Render } from '../../types'
import './LabeledTextBox.scss'

interface Props {
  label: string
  value?: string
  onChange?: (value?: string) => void
  characterLimit?: number
  numeric?: boolean
  validator?: (value?: string | number) => boolean
}

interface State {
  value?: string
  isValid: boolean
}

class LabeledTextBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: props.value,
      isValid: true
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  private onValueChange = (e: any): void => {
    const { validator } = this.props
    const { value } = e.target
    const isValid = validator ? validator(value) : true

    this.setState(
      {
        value,
        isValid
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(value)
        }
      }
    )
  }

  render(): Render {
    const { label, characterLimit, numeric } = this.props
    const { value, isValid } = this.state

    let errorMessage = null
    if (!isValid) {
      errorMessage = <div>Ooops!</div>
    }
    return (
      <div className={'text-box'}>
        <div className={'text-box__label'}>{label}</div>
        <input
          value={value}
          maxLength={characterLimit}
          type={numeric ? 'number' : 'text'}
          onChange={this.onValueChange}
        />
        {errorMessage}
      </div>
    )
  }
}

export type LabeledTextBoxProps = Props
export default LabeledTextBox
