import React from 'react'
import { shallow } from 'enzyme'
import TotalPrice from '../TotalPrice'

const props = {
  income: 200,
  outcome: 300
}

describe('test TotalPrice Component', () => {
  it('component should render correct income&&outcome number', () => {
    const warpper = shallow(<TotalPrice {...props} />)
    expect(warpper.find('.income').text() * 1).toEqual(200)
    expect(warpper.find('.outcome').text() * 1).toEqual(300)
  })
})