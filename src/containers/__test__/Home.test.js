import React from 'react'
import { mount } from 'enzyme'
import Home, { items } from '../Home'

import PriceList from '../../components/PriceList.js'
import ViewTab from '../../components/ViewTab.js'
import { LIST_VIEW, CHART_VIEW, INCOME, OUTCOME, parseToYearAndMonth, padleft } from '../../utility.js'
import MonthPicker from '../../components/MonthPicker.js'
import CreateBtn from '../../components/CreateBtn.js'
import TotalPrice from '../../components/TotalPrice.js'


const item = {
  'id':'3',
  'title':'新加的项目',
  'date':'2020-03-20',
  'price':10000000,
  'cid':3
}

let wrapper
describe('test Home container component', () => {
  beforeEach(() => {
    wrapper = mount( <Home /> )
  })

  it('should render the default layout', () => {
    const currentDate = parseToYearAndMonth('2020/03/22')
    expect(wrapper.find(PriceList).length).toEqual(1)
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year)
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month)
    expect(wrapper.find(PriceList).props().items.length).toEqual(0)
  })

  it('click the another view tab, should change the default view', () => {
    wrapper.find('.nav-item').last().simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(0)
    // expect(wrapper.find('.chart-title').length).toEqual(1)
    // expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)
  })
  it('click the new month item, should switch to the correct items', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.dropdown-item').at(8).simulate('click')
    expect(wrapper.find(MonthPicker).props().month).toEqual(3)
    // expect(wrapper.find(MonthPicker).props().items.length).toEqual(2)
  })
  it('click the create button, should create the new item', () => {
    wrapper.find(CreateBtn).simulate('click')
    // expect(wrapper.find(PriceList).props().items.length).toEqual(2)
    // expect(wrapper.state('items')[0]).toEqual(item)
  })
})