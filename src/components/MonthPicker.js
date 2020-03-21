import React from 'react';
import PropTypes from 'prop-types';
import { padleft, range } from '../utility.js';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectYear:2020,
      selectMonth:3
    }
  }

  componentDidMount(){
    document.addEventListener('click',this.handelClick, false) // true - 事件句柄在捕获阶段执行  false- 默认。事件句柄在冒泡阶段执行
  }
  componentWillUnmount(){
    document.removeEventListener('click', this.handelClick, false)
  }

  handelClick = (event) => {
    // 如果节点上有个contains包括点击的内容，就不做任何处理   contains：检测一个函数包含在另一个元素之内
    if(this.node.contains(event.target)){
      return 
    }else{
      this.setState({
        isOpen:false
      })
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  _selectYear = (event, selectYear) => {
    event.preventDefault()
    this.setState({selectYear})
  }

  _selectMonth = (event, selectMonth) => {
    event.preventDefault()
    this.setState({selectMonth, isOpen: false})
    this.props.onPickerChange(this.state.selectYear, selectMonth)
  }

  render() {
    const { isOpen, selectYear, selectMonth } = this.state
    const { year, month } = this.props
    const manthRange = range(12, 1)
    const yearRange = range(9, -4).map(item => {
      return item + selectYear
    })

    return (
      <div className="dropdown month-picker-component" ref={(ref)=>this.node = ref}>
        <button 
        className="btn btn-lg btn-seconday dropdown-toggle"
        onClick={this.toggleDropdown}
        >
        {`${year}年 ${padleft(month)}月`}
        </button>

        { isOpen && (
          <div className="dropdown-menu" style={{display:'block'}}>
            <div className="row">
              <div className="col border-right">
                { yearRange.map((yearNumber, index) => {
                  return (
                    <a 
                    key={index} 
                    href="#"
                    className={ yearNumber === selectYear ? 'dropdown-item active' : 'dropdown-item' }
                    onClick={event => { this._selectYear(event, yearNumber) }}
                    >
                      {yearNumber} 年
                    </a>
                  )
                }) }
              </div>
              <div className="col">
                { manthRange.map((monthNumber, index) => {
                  return (
                    <a 
                    key={index} 
                    href="#"
                    className={ monthNumber === selectMonth ? "dropdown-item active" : "dropdown-item" }
                    onClick={event => {this._selectMonth(event, monthNumber)}}
                    >
                      {padleft(monthNumber)}月
                    </a>
                  )
                }) }
              </div>
            </div>
          </div>
        ) }
      </div>
    )
  }
}

MonthPicker.propTypes={
  onPickerChange:PropTypes.func.isRequired
}

export default MonthPicker