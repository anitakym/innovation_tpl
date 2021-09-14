/*
 * @Description  : 路由权限控制
 * @example :
 *  meta: {
      access: ['TYPE_1', 'TYPE_2'],
      accessStatus: false (可选)
    }
 */
import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import authority from './utils/authority'

// 权限控制
function authorityRedirect(to, from, next) {
  let status = true
  const { notAccess, allowAccess, accessStatus } = to.meta
  if (notAccess) {
    status = !authority(notAccess, accessStatus)
  } else if (allowAccess) {
    status = authority(allowAccess, accessStatus)
  } else {
    next()
    return false
  }
  if (status) {
    next()
  } else {
    next({
      path: '/404'
    })
  }
}

// const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  window.modals && window.modals.reverse().forEach(m => m.onCancel && m.closeAll(true)) // 关闭弹窗s
  if (to.path === '/login') {
    next()
    NProgress.done()
  } else {
    authorityRedirect(to, from, next)
  }
})

router.afterEach((to, from) => {
  NProgress.done() // 结束Progress
})

