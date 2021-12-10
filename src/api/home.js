import request from '@/utils/request'

// const limit = 6

export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

export const findBanner = () => {
  return request('/home/banner', 'get')
}

export const findNew = () => {
  return request('home/new', 'get')
}

export const findHot = () => {
  return request('home/hot', 'get')
}

export const findGoods = () => {
  return request('home/goods', 'get')
}
