import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('render App component', () => {
  test('show the title',  () => {
    render(<App />)
    expect(screen.getByText('Movies Finder'));
  })
})