import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Button from './index'

describe('Button', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Should be display Test text', async () => {
    const func = vi.fn()
    render(<Button onClick={func}>Test</Button>)
    const text = await waitFor(() => screen.getByText(/Test/i))
    expect(text).toBeInTheDocument()
  })

  it('Should be display Test test with disabled', async () => {
    const func = vi.fn()
    render(
      <Button disabled onClick={func}>
        Test
      </Button>
    )
    const text = await waitFor(() => screen.getByText(/Test/i))
    expect(text).toBeInTheDocument()
  })

  it('Should be click the button', async () => {
    const func = vi.fn()
    render(<Button onClick={func}>Test</Button>)
    const button = await waitFor(() => screen.getByText(/Test/i))
    await fireEvent.click(button)
    expect(func).toBeCalled()
  })
})
