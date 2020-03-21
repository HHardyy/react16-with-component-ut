export const LIST_VIEW = 'VIEWTAB/LIST_VIEW' // 列表
export const CHART_VIEW = 'VIEWTAB/CHART_VIEW' // 图表
export const INCOME = 'income'  // 收入
export const OUTCOME = 'outcome'  // 支出


// 补0
export const padleft = (num) => {
  return num < 10 ? '0' + num : num
}

// 生成连续数
export const range = (size, startAt = 0) => {
  const _arr = []
  for( let i = 0; i < size; i++ ) {
    _arr[i] = startAt + i
  }
  return _arr
}

// 时间处理方法
export const parseToYearAndMonth = (str) => {
  const date = str ? new Date(str) : new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  }
}