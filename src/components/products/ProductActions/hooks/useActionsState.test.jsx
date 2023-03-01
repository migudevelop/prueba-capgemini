import { act, cleanup, renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import useActionsState from './useActionsState'

describe('useActionsState', () => {
  beforeEach(() => {
    cleanup()
  })

  it('productColor should be null', async () => {
    const { result } = renderHook(() => useActionsState())
    expect(result.current.productColor).toBeNull()
  })

  it('productStorage should be null', async () => {
    const { result } = renderHook(() => useActionsState())
    expect(result.current.productStorage).toBeNull()
  })

  it('handleOnChangeColor should be called', async () => {
    const { result } = renderHook(() => useActionsState())
    const spy = vi.spyOn(result.current, 'handleOnChangeColor')
    await act(() => {
      result.current.handleOnChangeColor({ target: { value: 'test' } })
    })
    expect(spy).toBeCalled()
  })

  it('handleOnChangeStorage should be called', async () => {
    const { result } = renderHook(() => useActionsState())
    const spy = vi.spyOn(result.current, 'handleOnChangeStorage')
    await act(() => {
      result.current.handleOnChangeStorage({ target: { value: 'test' } })
    })
    expect(spy).toBeCalled()
  })

  it('setProductColor should be called', async () => {
    const { result } = renderHook(() => useActionsState())
    const spy = vi.spyOn(result.current, 'setProductColor')
    await act(() => {
      result.current.setProductColor('test')
    })
    expect(spy).toBeCalled()
  })

  it('setProductStorage should be called', async () => {
    const { result } = renderHook(() => useActionsState())
    const spy = vi.spyOn(result.current, 'setProductStorage')
    await act(() => {
      result.current.setProductStorage('test')
    })
    expect(spy).toBeCalled()
  })
})
