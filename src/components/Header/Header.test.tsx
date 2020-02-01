import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

describe('Header', () => {
  beforeEach(() => {
  }, 1000);
  it('renders correctly', () => {
    const component = renderer.create(<Header/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('has logo', () => {
    const root = renderer.create(<Header/>).root
    const img = root.findByType('img')
    expect(img).toBeDefined()
    expect(img.props.className.includes('logo')).toBeTruthy()
  })
})
