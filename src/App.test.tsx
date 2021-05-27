import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './App.test_util'
import App from './App'

it('Renders the connected app with initialState', () => {
  render(<App />, { initialState: { matrix:{matrix:[[]]} } })

  expect(screen.getByText(/Matrix/i)).toBeInTheDocument()
})