import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Catalog from './component/Catalog'
import Page from './component/Page'
import Box from './component/Box'

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
    let currIndex = parseInt(window.location.hash.replace('#/', ''))
    if (isNaN(currIndex)) {
      currIndex = -1
    }

    if (currIndex >= 6 - 1) {
      return
    }

    this.router_.history.push('/' + (currIndex + 1))
  }

  goPrev() {
    let currIndex = parseInt(window.location.hash.replace('#/', ''))
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
          }}>
          <div className="pages">
            <Catalog
              items={[
                '首页',
                'TypeError前端直播室',
                '未命名',
                '绪论',
                '现代javascript',
                '编程实践 - 俄罗斯方块'
              ]}
            />
            <Page pageIndex={0}>
              <Box data={{ className: 'cover' }}>
                <h1 id="typeerror-">TypeError前端直播室</h1>
                <h5 id="-pc-">手机浏览器请向左滑, PC浏览器请点击空格键</h5>
              </Box>
            </Page>
            <Page pageIndex={1}>
              <h2 id="typeerror-">TypeError前端直播室</h2>
              <h3 id="-">介绍</h3>
              <p>
                TypeError前端直播室是一个线上前端技术培训项目,
                目前和专业培训机构合作打造课程.
              </p>
              <p>获取详细信息请扫码加微信.</p>
              <h3 id="-">访问地址</h3>
              <ul>
                <li>
                  主页:{' '}
                  <a href="https://typeerrorfeclass.github.io">
                    typeerrorfeclass.github.io
                  </a>
                </li>
                <li>
                  直播:{' '}
                  <a href="https://www.yy.com/34592948/34592948">
                    YY直播间34592948
                  </a>
                </li>
                <li>
                  github:{' '}
                  <a href="https://github.com/typeerrorfeclass">
                    @typeerrorfeclass
                  </a>
                </li>
              </ul>
              <h3 id="-">微信扫码</h3>
              <p>
                <img src="assets/wechat.png" alt="微信二维码" />
              </p>
              <h3 id="-">项目</h3>
              <h4 id="-">高级前端培训课程</h4>
              <p>每周六周日线上开课, YY直播室见下方. 如需报名请加微信.</p>
              <h4 id="-">前端技术每话题每日直播</h4>
              <p>筹备中...</p>
            </Page>
            <Page pageIndex={2}>
              <Box data={{ className: 'cover' }}>
                <h1 id="-">高级前端培训课程</h1>
              </Box>
            </Page>
            <Page pageIndex={3}>
              <h2 id="-">绪论</h2>
              <h3 id="-">简介</h3>
              <p>
                前端工程师是一份什么样的工作?
                专业前端工程师和前端爱好者有什么不同? 高级前端工程师高级在哪里?
                绪论课程会告诉你答案.
              </p>
              <h3 id="-">链接</h3>
              <ul>
                <li>主页: 准备中...</li>
                <li>
                  github:{' '}
                  <a href="https://github.com/typeerrorfeclass/introduction-class">
                    typeerrorfeclass/introduction-class
                  </a>
                </li>
              </ul>
            </Page>
            <Page pageIndex={4}>
              <h2 id="-javascript">现代javascript</h2>
              <h3 id="-">简介</h3>
              <p>
                ECMAScript教学课, 包含ECMAScript基本概念, babel使用, eslint使用,
                以及新语法的深度介绍和使用经验.
              </p>
              <h3 id="-">链接</h3>
              <ul>
                <li>
                  主页:{' '}
                  <a href="https://typeerrorfeclass.github.io/ecmascript-class">
                    typeerrorfeclass/ecmascript-class
                  </a>
                </li>
                <li>
                  github:{' '}
                  <a href="https://github.com/typeerrorfeclass/ecmascript-class">
                    typeerrorfeclass/ecmascript-class
                  </a>
                </li>
              </ul>
            </Page>
            <Page pageIndex={5}>
              <h2 id="-">编程实践 - 俄罗斯方块</h2>
              <h3 id="-">简介</h3>
              <p>以俄罗斯方块为案例, 讲解前端单页应用设计和实现方法.</p>
              <h3 id="-">链接</h3>
              <ul>
                <li>
                  主页:{' '}
                  <a href="https://typeerrorfeclass.github.io/tetris-class">
                    typeerrorfeclass/tetris-class
                  </a>
                </li>
                <li>
                  github:{' '}
                  <a href="https://github.com/typeerrorfeclass/tetris-class">
                    typeerrorfeclass/tetris-class
                  </a>
                </li>
              </ul>
            </Page>
            <Route exact path="/" render={_ => <Redirect to={'/0'} />} />
          </div>
        </Router>
      </div>
    )
  }
}
