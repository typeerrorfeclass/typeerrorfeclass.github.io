import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Catalog from './component/Catalog'
import Page from './component/Page'

export default class PPT extends React.Component {
  static get displayName() {
    return 'PPT'
  }

  componentDidMount() {
    this.onKeyDown_ = this.onKeyDown.bind(this)
    document.addEventListener('keydown', this.onKeyDown_)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown_)
    this.onKeyDown_ = null
  }

  onKeyDown(evt) {
    const code = evt.code.toLowerCase()

    if (code === 'space' || code === 'arrowright' || code === 'arrowdown') {
      this.goNext()
    } else if (code === 'arrowleft' || code === 'arrowup') {
      this.goPrev()
    }
  }

  goNext() {
    let currIndex = parseInt(window.location.hash)
    if (isNaN(currIndex)) {
      currIndex = -1
    }

    if (currIndex >= 2 - 1) {
      return
    }

    this.router_.history.push('/' + (currIndex + 1))
  }

  goPrev() {
    let currIndex = parseInt(window.location.hash)
    if (isNaN(currIndex)) {
      currIndex = 1
    }

    if (currIndex === 0) {
      return
    }

    this.router_.history.push('/' + (currIndex - 1))
  }

  render() {
    return (
      <div className="ppt">
        <Router
          ref={c => {
            this.router_ = c
          }}
          basename={'/home'}>
          <div className="pages">
            <Catalog items={['TypeError前端直播室', '课程']} />
            <Page pageIndex={0}>
              <h2 id="typeerror-">TypeError前端直播室</h2>
              <h3 id="-">访问</h3>
              <ul>
                <li>
                  主页:{' '}
                  <a href="https://typeerrorfeclass.github.io/home">
                    https://typeerrorfeclass.github.io/home
                  </a>
                </li>
                <li>
                  YY直播间: <a href="https://0x9.me/j4v80">34592948</a>
                </li>
                <li>
                  github:{' '}
                  <a href="https://github.com/typeerrorfeclass">
                    https://github.com/typeerrorfeclass
                  </a>
                </li>
              </ul>
              <h3 id="-">联系方式</h3>
              <p>微信扫码:</p>
              <p>
                <img src="./wechat.png" alt="微信二维码" />
              </p>
              <h3 id="-">项目</h3>
              <h4 id="-">高级前端培训课程</h4>
              <p>每周六周日线上开课, YY直播室见下方. 如需报名请加微信.</p>
              <h4 id="-">前端技术每话题每日直播</h4>
              <p>筹备中...</p>
              <h3 id="-">详细内容请点击空格键</h3>
            </Page>
            <Page pageIndex={1}>
              <h2 id="-">课程</h2>
              <h3 id="-">绪论</h3>
              <h4 id="-">简介</h4>
              <p>
                前端工程师是一份什么样的工作？专业前端工程师和前端爱好者有什么不同？高级前端工程师高级在哪里？绪论课程会告诉你答案。
              </p>
              <h4 id="-">链接</h4>
              <p>
                资料：<a href="https://github.com/typeerrorfeclass/introduction-class">
                  https://github.com/typeerrorfeclass/introduction-class
                </a>
              </p>
              <h3 id="-javascript">现代javascript</h3>
              <p>
                ####简介
                ECMAScript教学课，包含ECMAScript基本概念、babel使用、eslint使用，以及新语法深度介绍。
              </p>
              <h4 id="-">链接</h4>
              <p>
                主页：<a href="https://typeerrorfeclass.github.io/ecmascript-class">
                  https://typeerrorfeclass.github.io/ecmascript-class
                </a>
              </p>
              <p>
                资料：<a href="https://github.com/typeerrorfeclass/ecmascript-class">
                  https://github.com/typeerrorfeclass/ecmascript-class
                </a>
              </p>
            </Page>
            <Route exact path="/" render={_ => <Redirect to={'/0'} />} />
          </div>
        </Router>
      </div>
    )
  }
}
