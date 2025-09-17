import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('render App component', () => {
  test('show the title',  () => {
    render(<App />)
    expect(screen.getByTestId('title').textContent).toContain("You'll Enjoy the Movies You find")
  })
})