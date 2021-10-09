import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages'

describe('Home', () => {
  it('renders welcome heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        name: 'Welcome to ScribeDAO'
      })
    ).toBeInTheDocument()
  })
})
