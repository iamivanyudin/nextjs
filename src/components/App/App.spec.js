import React from 'react'
import { render, cleanup } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  afterEach(cleanup)

  test('Renders the application container', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
