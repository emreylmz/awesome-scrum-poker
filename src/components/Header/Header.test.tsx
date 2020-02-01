import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

describe('Header', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have title', () => {
    const root = renderer.create(<Header />).root
    const img = root.findByType('h1')
    expect(img).toBeDefined()
    expect(img.props.className.includes('title')).toBeTruthy()
  })
})
