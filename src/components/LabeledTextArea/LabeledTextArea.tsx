import React from 'react'
import { Render } from '../../types'
import './LabeledTextArea.scss'

interface Props {
  label: string
  onChange?: (value?: string) => void
}

class LabeledTextArea extends React.PureComponent<Props> {
  private onChange = (event: any): void => {
    const value = event.target.value
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }
  render(): Render {
    const { label } = this.props
    return (
      <div className={'labeled-text-area'}>
        <div className={'labeled-text-area__label'}>{label}</div>
        <textarea onChange={this.onChange} />
      </div>
    )
  }
}

export type LabeledTextAreaProps = Props
export default LabeledTextArea
