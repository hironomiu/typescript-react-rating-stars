import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/ラーメン太郎/i)
  expect(linkElement).toBeInTheDocument()
})
