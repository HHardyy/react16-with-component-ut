import React from 'react'
import { shallow } from 'enzyme'
import Ioicons from 'react-ionicons';
import PriceList from '../PriceList.js'

/*
snapshot快照分析，然后是用例分析
*/

import { items, categorys } from '../../containers/Home.js'

const itemsWithCategory = items.map(item => {
  item.category = categorys[item.cid]
  return item
})

const props = {
  items:itemsWithCategory,
  onModifyItem:jest.fn(),  // jest.fn()冒充函数
  onDeleteItem:jest.fn()
}

let warpper
describe('test PriceList component', () => {
  beforeEach(() => {
    warpper = shallow( <PriceList {...props} /> )
  })
  // 测试传入的参数是否正常
  it('should render the component to match snapshot', () => {
    expect(warpper).toMatchSnapshot()
  })
  // 测试列表的渲染长度是否正确
  it('should render correct price items length', () => {
    expect(warpper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
  })
  it('should render correct icon and price for each item', () => {
    const iconlist = warpper.find('.list-group-item').first().find(Ioicons)
    expect(iconlist.length).toEqual(3)
    // expect(iconlist.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)
    // 点击按钮
  })
  // 按钮是否被点击
  it('should trigger the correct function callback', () => {
    const firstItem = warpper.find('.list-group-item').first()
    firstItem.find('a').first().simulate('click') // simulate触发事件
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])  // 监听这个函数是否被调用，用什么参数去调用
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
  })
})
