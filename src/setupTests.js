// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// 脚手架自带
// import '@testing-library/jest-dom/extend-expect';


// 测试配置文件， npm run test的时候会自动找到项目中.test.js结尾的文件
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })