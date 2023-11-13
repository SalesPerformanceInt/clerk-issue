import { describe, expect, test } from 'vitest'
import { getUserInitials } from './getUserInitials'

test('tests getUserInitials on simple name', () => {
  const name = {first_name: 'Erlich', last_name: 'Bachman'}
  expect(getUserInitials(name)).toEqual('EB')
})

test('tests getUserInitials on simple name', () => {
  const name = {first_name: 'Baron', last_name: 'Von Shtupper'}
  expect(getUserInitials(name)).toEqual('BV')
})

test('tests getUserInitials on simple name', () => {
  const name = {first_name: 'Madonna', last_name: ''}
  expect(getUserInitials(name)).toEqual('M')
})
