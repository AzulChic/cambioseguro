import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ExchangeMoneyForm from '../ExchangeMoneyForm.vue'

describe('ExchangeMoneyForm', () => {
  it('renders properly', () => {
    const wrapper = mount(ExchangeMoneyForm, { props: { msg: 'Exchange Money Form' } })
    expect(wrapper.text()).toContain('Exchange Money Form')
  })
})
