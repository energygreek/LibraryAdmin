import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '图书管理系统', icon: 'dashboard' }
    }]
  },

  {
    path: '/books',
    component: Layout,
    redirect: '/book/table',
    name: 'Books',
    meta: { title: '图书管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'BookTable',
        component: () => import('@/views/table/index'),
        meta: { title: '图书列表', icon: 'table' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    redirect: '/book/table',
    name: 'Users',
    meta: { title: '用户管理', icon: 'el-icon-user' },
    children: [
      {
        path: 'table',
        name: 'UserTable',
        component: () => import('@/views/user/index'),
        meta: { title: '用户列表', icon: 'user' }
      }
    ]
  },

  {
    path: '/bookio',
    component: Layout,
    redirect: '/bookio/table',
    name: 'BookIO',
    meta: { title: '借阅管理', icon: 'el-icon-s-claim' },
    children: [
      {
        path: 'table',
        name: 'BookIOTable',
        component: () => import('@/views/user/index'),
        meta: { title: '借还记录', icon: 'el-icon-document' }
      },
      {
        path: 'otable',
        name: 'BookOTable',
        component: () => import('@/views/formrent/index'),
        meta: { title: '借阅登记', icon: 'table' }
      },
      {
        path: 'itable',
        name: 'BookITable',
        component: () => import('@/views/formreturn/index'),
        meta: { title: '归还登记', icon: 'table' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    meta: { title: '表单', icon: 'el-icon-s-help' },
    hidden: false,
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/formuser/index'),
        meta: { title: '用户编辑', icon: 'form' }
      },
      {
        path: 'book/:id',
        name: 'Book',
        component: () => import('@/views/formbook/index'),
        meta: { title: '图书编辑', icon: 'form' }
      },
      {
        path: 'book/',
        name: 'Book',
        component: () => import('@/views/formbook/index'),
        meta: { title: '图书新增', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
