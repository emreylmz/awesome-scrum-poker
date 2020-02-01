import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

describe('Header', () => {
  beforeEach(() => {
  }, 1000);
  it('should be renders correctly', () => {
    const component = renderer.create(<Header/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('should have title', () => {
    const root = renderer.create(<Header/>).root
    const img = root.findByType('h1')
    expect(img).toBeDefined()
    expect(img.props.className.includes('title')).toBeTruthy()
  })
})
