import { describe, beforeEach, afterEach, expect, test, vi } from 'vitest'
import { isWeekend, getNextValidBusinessDate } from './date'

describe('date functions', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  test('tests Monday isWeekend', () => {
    const date = new Date(2023, 10, 13, 12) // Monday
    expect(isWeekend(date)).toEqual(false)
  })

  test('tests Saturday isWeekend', () => {
    const date = new Date(2023, 10, 11, 12) // Sat
    expect(isWeekend(date)).toEqual(true)
  })

  test('tests Saturday + 2 getNextValidBusinessDate', () => {
    const date = new Date(2023, 10, 11, 12) // Sat 2023-11-11

    expect(getNextValidBusinessDate(date, 2)).toEqual("2023-11-14")
  })
  test('tests Friday + 2 getNextValidBusinessDate', () => {
    const date = new Date(2023, 10, 10, 12) // Friday 2023-11-10

    expect(getNextValidBusinessDate(date, 2)).toEqual("2023-11-13") // Monday
  })
  test('tests Wednesday + 0 getNextValidBusinessDate', () => {
    const date = new Date(2023, 10, 15, 12) // Wednesday 2023-11-15

    expect(getNextValidBusinessDate(date, 0)).toEqual("2023-11-16") // Thursday
  })
})