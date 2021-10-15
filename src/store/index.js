import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
