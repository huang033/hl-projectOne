// import React from 'react'
// import * as antd from 'antd' 


// var Menu = antd.Menu;
// var SubMenu = Menu.SubMenu;

// var App1 = React.createClass({
//   getInitialState() {
//     return {
//       current: 'mail'
//     }
//   },
//   handleClick(e) {
//     console.log('click ', e);
//     this.setState({
//       current: e.key
//     });
//   },
//   render() {
//     return <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//     <Menu.Item key="mail">
//       <i className="anticon anticon-mail"></i>导航一
//     </Menu.Item>
//     <Menu.Item key="app">
//       <i className="anticon anticon-appstore"></i>导航二
//     </Menu.Item>
//     <SubMenu title={<span><i className="anticon anticon-setting"></i>导航 - 子菜单</span>}>
//       <Menu.Item key="setting:1">选项1</Menu.Item>
//       <Menu.Item key="setting:2">选项2</Menu.Item>
//       <Menu.Item key="setting:3">选项3</Menu.Item>
//       <Menu.Item key="setting:4">选项4</Menu.Item>
//     </SubMenu>
//     <Menu.Item key="alipay">
//       <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
//     </Menu.Item>
//   </Menu>
//   }
// });

// export default App1
// React.render(<App1 />, document.getElementById('components-menu-demo-horizontal'));