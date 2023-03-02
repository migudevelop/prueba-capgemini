import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import ProductListView from './index'
import { useQuery } from 'react-query'

vi.mock('react-query', () => ({
  useQuery: vi.fn()
}))

vi.mock('./hooks/useProductListViewState', async () => {
  const actual = await vi.importActual('./hooks/useProductListViewState')
  return {
    ...actual,
    productsToDisplay: [],
    showLoader: false,
    handleOnSearch: vi.fn()
  }
})

describe('ProductListView', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('Should be display skeleton component', async () => {
    useQuery.mockReturnValue({ isLoading: true })
    render(<ProductListView />)
    const noResultsText = await waitFor(() => screen.queryByText(/No results/i))
    expect(noResultsText).not.toBeInTheDocument()
  })

  it('Should be display component without products', async () => {
    useQuery.mockReturnValue({ isLoading: false })
    render(<ProductListView />)
    const noResultsText = await waitFor(() => screen.getByText(/No results/i))
    expect(noResultsText).toBeInTheDocument()
  })
})
