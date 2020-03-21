import React from 'react'
import PriceList from '../components/PriceList.js'
import ViewTab from '../components/ViewTab.js'
import { LIST_VIEW, INCOME, OUTCOME, parseToYearAndMonth, padleft } from '../utility.js'
import MonthPicker from '../components/MonthPicker.js'
import CreateBtn from '../components/CreateBtn.js'
import TotalPrice from '../components/TotalPrice.js'

export const categorys = {
  "1": {
    'name':'旅行',
    'id':'1',
    'type':'outcome',
    'iconName':'ios-plane'
  },
  "2": {
    'name':'旅行',
    'id':'1',
    'type':'income',
    'iconName':'ios-plane'
  },
  "3": {
    'name':'天使轮',
    'id':'1',
    'type':'income',
    'iconName':'ios-plane'
  }
}

export const items = [
  {
    'id':'1',
    'title':'去西藏旅行',
    'date':'2020-01-20',
    'price':999,
    'cid':1
  },
  {
    'id':'2',
    'title':'去西藏旅行',
    'date':'2020-02-20',
    'price': 9999,
    'cid':2
  }
] 
const item = {
  'id':'3',
  'title':'新加的项目',
  'date':'2020-03-20',
  'price':10000000,
  'cid':3
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items,
      currentDate:parseToYearAndMonth('2020/3/22'),
      tabView:LIST_VIEW
    }
  }
  changeView = (view) => {
    this.setState({tabView:view})
  }
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }
  modifyItem = (modify) => {
    let modifyItems = this.state.items.map(item => {
      if(item.id === modify.id) {
        return {...item, title:'改成了新的标题'}
      }else{
        return item
      }
    })
    this.setState({
      items: modifyItems
    })
  }
  deleteItem =(item) => {
    this.setState({
      items: this.state.items.filter((fl) => fl.id !== item.id)
    })
  }
  createItem = () => {
    this.setState({items:[item, ...this.state.items]})
  }
  render(){
    const { items, currentDate, tabView } = this.state
    
    const itemsWithCategory = items.map((item, index) => {
      item.category = categorys[item.cid]
      return item
    }).filter(item=> {
      return item.date.includes(`${currentDate.year}-${padleft(currentDate.month)}`)
    })

    let totalIncome = 0, totalOutcome = 0;
    itemsWithCategory.forEach((item, index) => {
      if(item.category.type === INCOME) {
        totalIncome += item.price
      }else if(item.category.type === OUTCOME){
        totalOutcome += item.price
      }
    })

    return (
      <React.Fragment>
        <header className="App-header" style={{background: 'orange'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'5rem', backgroundColor:'#282A37', color:'#fff', letterSpacing:'2px'}}>
            Hardy的在线小账本
          </div>

          <div className="row" style={{display:'flex', alignItems:'center'}}>
            <div className="col">
              <MonthPicker 
                year={currentDate.year}
                month={currentDate.month}
                onPickerChange={this.changeDate}
              />
            </div>
            <div className="col">
              <TotalPrice 
                income={totalIncome}
                outcome={totalOutcome}
              />
            </div>
          </div>
        </header>

        <div className="content-area py-3 px-3">
          <ViewTab 
            activeTab={tabView}
            onTabChange={this.changeView}
          />

          <CreateBtn 
            onClick={this.createItem}
          />

          { tabView === LIST_VIEW ? (
            <PriceList 
            items={itemsWithCategory}
            onModifyItem={this.modifyItem}
            onDeleteItem={this.deleteItem}
          />
          ) : (
            <h1 className="chart-title">chart list</h1>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Home