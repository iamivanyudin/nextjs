import React from 'react'
import { render, cleanup } from '@testing-library/react'

import LandingScreen from './LandingScreen'

describe('<LandingScreen />', () => {
  afterEach(cleanup)

  test('renders a welcome message', () => {
    const { getByTestId } = render(<LandingScreen />)

    expect(getByTestId('welcome-text')).toHaveTextContent('Hello 👋')
  })
})
