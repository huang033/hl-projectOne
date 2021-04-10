import React from 'react'
import './home.css'
import path from '../../asset/video/bg.mp4' // 必须引入
import phonevideo from '../../asset/video/center.mp4' // 必须引入
import navlogo from '../../asset/img/navlogo.png' // 必须引入
import apple from '../../asset/img/apple.svg' // 必须引入
import anzhuo from '../../asset/img/anzhuo.svg' // 必须引入
import appleCode from '../../asset/img/apple-red.png' // 必须引入
import anzhuoCode from '../../asset/img/anzhuo-red.png' // 必须引入
import gonan from '../../asset/img/gonan.png' // 必须引入
import btnicon from '../../asset/img/icon1.png' // 必须引入
 import * as antd from 'antd' // 引入antd组件  111
//首页
import { Menu, Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

class Home extends React.Component {
  state = {
    current: 'home'
  }
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      appleOpacity: 0,
      andOpacity: 0
    }
    this.handleAppleCodeShow = this.handleAppleCodeShow.bind(this)
    this.handleAndroidCodeShow = this.handleAndroidCodeShow.bind(this)
  }
  handleAppleCodeShow() {
    this.setState((e) => ({
      isToggleOn: !e.isToggleOn,
      appleOpacity: e.isToggleOn ? 1 : 0
    }))
  }
  handleAndroidCodeShow() {
    this.setState((e) => ({
      isToggleOn: !e.isToggleOn,
      andOpacity: e.isToggleOn ? 1 : 0
    }))
  }

  handleClick = (e) => {
    // console.log('click ', e)
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    const businessCooper = (
      <Menu>
        <Menu.Item>企业号</Menu.Item>
        <Menu.Item>推广合作</Menu.Item>
        <Menu.Item>品牌合作人</Menu.Item>
        <Menu.Item>商家入驻</Menu.Item>
      </Menu>
    )
    const CreatorServices = (
      <Menu>
        <Menu.Item>数据查看</Menu.Item>
        <Menu.Item>视频上传</Menu.Item>
        <Menu.Item>电脑直播</Menu.Item>
        <Menu.Item>直播管理</Menu.Item>
      </Menu>
    )
    const language = (
      <Menu>
        <Menu.Item>English(Us)</Menu.Item>
      </Menu>
    )
    return (
      <div className="home-container">
        {/* 背景视频 */}
        <div className="bg-video">
          <video width="2400" autoPlay loop>
            <source src={path} />
          </video>
        </div>

        <div className="home-top">
          <img src={navlogo} className="navlogo" alt="" />
          {/* 顶部导航栏 */}
          <div className="nav-right">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="community-delicate">社区精选</Menu.Item>
              <Menu.Item key="businessCooper">
                <Dropdown overlay={businessCooper}>
                  <a>
                    业务合作 <CaretDownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>

              <Menu.Item key="CreatorServices">
                <Dropdown overlay={CreatorServices}>
                  <a>
                    创作者服务 <CaretDownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="newsCenter">新闻中心</Menu.Item>
              <Menu.Item key="contactUs">联系我们</Menu.Item>
              <Menu.Item key="socialResponsibility">社会责任</Menu.Item>
              <Menu.Item key="joinUs">加入我们</Menu.Item>
              <Menu.Item key="language">
                <Dropdown overlay={language}>
                  <a>
                    中文 <CaretDownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </div>
        </div>

        {/* 中间部分 */}
        <div className="home-center">
          <video width="260" autoPlay loop>
            <source src={phonevideo} />
          </video>
        </div>

        <div className="home-center-right">
          <img src={navlogo} className="navlogo-center" alt="" />
          <div className="mylife">标记我的生活</div>
          <div>
            <div className="home-center-bt">
              <div
                className="apple-center"
                onMouseOver={this.handleAppleCodeShow}
                onMouseOut={this.handleAppleCodeShow}
              >
                <img src={apple} alt="" />
                iOS 版
              </div>
              <div
                className="apple-center"
                onMouseOver={this.handleAndroidCodeShow}
                onMouseOut={this.handleAndroidCodeShow}
              >
                <img src={anzhuo} alt="" />
                Android 版
              </div>
            </div>
            {/* 二维码部分 */}
            <div className="code">
              <div
                className="appleCode"
                style={{ opacity: this.state.appleOpacity }}
              >
                <img src={appleCode} alt="" />
              </div>
              <div
                className="anzhuoCode"
                style={{ opacity: this.state.andOpacity }}
              >
                <img src={anzhuoCode} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* 底部 */}
        <div className="bottom">
          <div className="bottom-first">
            <div className="bto-items">用户协议</div>
            <div className="bto-items">隐私政策</div>
            <div className="bto-items">侵权投诉指引</div>
            <div className="bto-items">社区规范</div>
          </div>
          <div className="bto-two">
            沪ICP备 13030189号 Copyright © 2014-2021
            行吟信息科技（上海）有限公司 | 地址：上海市黄浦区马当路388号C座 |
            电话：021-64224530 | 自营经营者信息 | 2021 沪公网安备
            31010102002533号
            <img src={gonan} className="gonan" alt="" />
          </div>
          <div className="bto-two">
            网络文化经营许可证：沪网文[2018]4086-308号 |
            增值电信业务经营许可证：沪B2-2015002
            <img src={btnicon} className="btnicon" alt="" />
            网购(订餐)大家评
          </div>
          <div className="bto-two">
            医疗器械经营许可证：沪嘉食药监械经营许20187006号 |
            医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号
            | 互联网药品信息服务资格证书：(沪)-经营性-2018-0011
          </div>
          <div className="bto-two">
            违法不良信息举报电话：(027) 8700 3878 | 上海市互联网举报中心 |
            网上有害信息举报专区
          </div>
        </div>
      </div>
    )
  }
}

export default Home
