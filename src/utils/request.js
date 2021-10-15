// 1.导入axios
import axios from 'axios'
import store from '../store/index'
import router from '@/router'

// 基础链接放外面
const url = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL: url,
  timer: 5000
})
instance.interceptors.request.use(
  (config) => {
    const { profile } = store.state.user
    if (profile.token) {
      config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (res) => {},
  (err) => {
    if (err.response && err.response.status === 401) {
      // 1. 清空无效用户信息
      // 2. 跳转到登录页
      // 3. 跳转需要传参（当前路由地址）给登录页码
      store.commit('user/setUser', {})
      // 当前路由地址
      // 组件里头：`/user?a=10` $route.path === /user  $route.fullPath === /user?a=10
      // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是ref响应式数据
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      // encodeURIComponent 转换uri编码，防止解析地址出问题
      router.push('/login?redirectUrl=' + fullPath)
      return Promise.reject(err)
    }
  }
)

export default (method, url, submitDate) => {
  instance({
    method,
    url,
    [method.toLowerCase() === 'get' ? 'GET' : 'POST']: submitDate
  })
}
