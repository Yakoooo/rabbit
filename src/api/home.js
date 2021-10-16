import request from '@/utils/request'

// const limit = 6

export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
